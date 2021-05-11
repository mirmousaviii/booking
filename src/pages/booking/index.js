import React from 'react';
import DefaultLayout from '../../layouts/default';
import Typography from '@material-ui/core/Typography';
import {addNewAgenda, GetAgenda} from '../../services/api';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import {
  Button,
  Dialog, DialogActions, DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

function BookingPage() {
  const localized = momentLocalizer(moment);
  const [view, setView] = React.useState(Views.MONTH);
  const [events, setEvents] = React.useState([]);
  const [mentor, setMentor] = React.useState({});
  const [openDialogReason, setOpenDialogReason] = React.useState(false);
  const [newSlotReason, setNewSlotReason] = React.useState('');
  const [newSlotTime, setNewSlotTime] = React.useState({});

  React.useEffect(() => {
    //TODO: Use mentor Id by URL
    GetAgenda(1).then(res => {
      setMentor(res.data?.mentor);
      const timeZone = res.data?.time_zone;

      let eventsLoaded = [];
      res.data.calendar.forEach((item) => {
        const startEventTime = moment(item?.date_time)
            .utc(timeZone)
            .local(true);
        const endEventTime = moment(item?.date_time)
            .utc(timeZone)
            .local(true)
            .add(1, 'hours');

        eventsLoaded.push({
          title: startEventTime.format('HH:mm').toString() +
              ' - ' +
              endEventTime.format('HH:mm').toString(),
          tooltip: 'Busy',
          start: new Date(startEventTime.toString()),
          end: new Date(endEventTime.toString()),
        });
      });
      setEvents(eventsLoaded);

    }).catch(error => {
      //TODO: Use notification of material-ui
      alert(error.message);
    });

  }, []);

  let selectSlot = (e) => {
    if (view === 'day') {
      setNewSlotTime(e.start);
      handleOpenDialogReason(true);
    }
  };

  let selectBusySlot = (e) => {
    if (view === 'day') {
      //TODO: Use notification of material-ui
      alert('The slot is busy. Pleas select another time!');
    }
  };

  const addSlot = () => {
    //TODO: Add time zone
    const newSlotData = {
      start: newSlotTime,
      reason: newSlotReason,
    };
    addNewAgenda(1, newSlotData).then(res => {
      //TODO: Check response code and update loaded data
      // let eventsLoaded = events;
      //   eventsLoaded.push({
      //     title: startEventTime.format('HH:mm').toString() +
      //         ' - ' +
      //         endEventTime.format('HH:mm').toString(),
      //     tooltip: 'Busy',
      //     start: new Date(startEventTime.toString()),
      //     end: new Date(endEventTime.toString()),
      //   });
      // });
      // setEvents(eventsLoaded);

      alert(moment(newSlotTime).format('HH:mm').toString() +
          ' - ' +
          newSlotReason,
      );
      handleCloseDialogReason();
    }).catch(error => {
      //TODO: Use notification of material-ui
      alert(error.message);
    });
  };

  const handleOpenDialogReason = () => {
    setOpenDialogReason(true);
  };

  const handleCloseDialogReason = () => {
    setNewSlotReason('');
    setOpenDialogReason(false);
  };

  return (
      <DefaultLayout>
        <Typography variant="h5" gutterBottom>
          Booking for <strong>{mentor?.name}</strong>
        </Typography>

        <Calendar
            localizer={localized}
            events={events}
            startAccessor="start"
            endAccessor="end"
            tooltipAccessor="tooltip"
            selectable={true}
            step={60}
            onSelectSlot={selectSlot}
            onSelectEvent={selectBusySlot}
            views={[Views.MONTH, Views.DAY]}
            onView={(view) => setView(view)}
        />

        <Dialog open={openDialogReason} onClose={handleCloseDialogReason}>
          <DialogTitle>Reason</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter reason of the call:
            </DialogContentText>
            <TextField
                autoFocus
                label="Title"
                type="text"
                fullWidth
                value={newSlotReason}
                onChange={e => setNewSlotReason(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogReason} color="primary">
              Cancel
            </Button>
            <Button onClick={addSlot} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

      </DefaultLayout>
  );
}

export default BookingPage;
