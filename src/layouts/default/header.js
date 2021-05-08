import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {AppBar, Box} from '@material-ui/core';
import {EventNoteRounded} from '@material-ui/icons';

/**
 * Header of default layout
 * @return {JSX.Element}
 * @constructor
 */
function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          <EventNoteRounded/>
          <Box flexGrow={1}>
            <Typography variant="h5" component="h1" color="inherit">
              ‌ Simple Booking
            </Typography>
          </Box>
          {/* TODO: Add Login/Logout*/}
          {/* {user ?
              (<Button
                  color="inherit"
                  aria-label="Logout"
                  onClick={logout}>Logout</Button>) :
              (<Button
                  color="inherit"
                  aria-label="Login"
                  component={Link}
                  to="/login">Login</Button>)
          }*/}
        </Toolbar>
      </AppBar>
  );
}

export default Header;
