import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import { Container } from '@material-ui/core';
import DartBoard from './containers/DartBoard';
import Footer from './components/Footer/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#000000',
      main: '#76E5FC',
      dark: '#65c2d4',
      contrastText: '#274060'
    },
    secondary: {
      light: '#000000',
      main: '#5C2751',
      dark: '#000000',
      contrastText: '#000000'
    }
  },
  typography: {
    useNextVariants: true,
  }
});
console.log(theme)

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Container> 
        <DartBoard />
      </Container>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
