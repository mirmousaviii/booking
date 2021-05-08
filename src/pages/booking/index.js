import React from 'react';
import DefaultLayout from '../../layouts/default';
import Typography from '@material-ui/core/Typography';
import {GetAgenda} from '../../services/api';

function BookingPage() {
  React.useEffect(() => {

    GetAgenda(1).then(res => {
      console.log(res.data);
    }).catch(error => {
      //TODO: Use notification of material-ui
      alert(error.message);
    });

  }, []);

  return (
      <DefaultLayout>
        <Typography variant="h5" gutterBottom>
          Calendar page
        </Typography>

      </DefaultLayout>
  );
}

export default BookingPage;
