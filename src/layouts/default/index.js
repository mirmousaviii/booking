import React from 'react';
import Header from './header';
import {AppBar, Box} from '@material-ui/core';
import Footer from './footer';

/**
 * Default layout
 * @param  {children} Children
 * @return {JSX.Element}
 */
function DefaultLayout({children}) {
  return (
      <>
        <AppBar position="static">
          <Header/>
        </AppBar>
        <Box m={5} height="80vh" >
          {children}
        </Box>
        <Footer/>
      </>
  );
}

export default DefaultLayout;
