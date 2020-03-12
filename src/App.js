import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Header from './containers/Header';
import DartBoard from './containers/DartBoard';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#32db0a',
      main: '#1d9500',
      dark: '#32db0a',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#000000',
      main: '#c2183a',
      dark: '#d91840',
      contrastText: '#FFF'
    }
  },
  typography: {
    useNextVariants: true,
  }
});

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Container> 
        <DartBoard />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
