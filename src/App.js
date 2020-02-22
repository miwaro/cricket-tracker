import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import { Container } from '@material-ui/core';
import DartBoard from './containers/DartBoard';
// import Footer from './components/Footer/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#000000',
      main: '#673ab7',
      dark: '#311b92',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#000000',
      main: '#009688',
      dark: '#004d40',
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
