import React from 'react';

import { MuiThemeProvider, createMuiTheme, StylesProvider } from '@material-ui/core/styles';

// import { Container } from '@material-ui/core';

import Header from './containers/Header';
import DartBoard from './containers/DartBoard';
import Checkbox from './components/Checkbox/Checkbox';
import classes from './App.module.css';

const theme = createMuiTheme({

  palette: {
    primary: {
      light: '01579b',
      main: '#0277bd',
      dark: '#03a9f4',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#212121',
      main: '#424242',
      dark: '#616161',
      contrastText: '#FFF'
    }
  },
  typography: {
    useNextVariants: true,
  }
});

const App = (props) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Header />
        <div className={classes.DartBoardContainer}> 
          <DartBoard />
        </div>
        <Checkbox />
      </MuiThemeProvider>
    </StylesProvider>
    
  );
}

export default App;
