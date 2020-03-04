import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import { Container } from '@material-ui/core';
import DartBoard from './containers/DartBoard';
// import Footer from './components/Footer/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#32db0a',
      // main: '#673ab7',
      main: '#1d9500',
      dark: '#32db0a',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#000000',
      // main: '#009688',
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
      {/* <Footer /> */}
    </MuiThemeProvider>
  );
}

export default App;
