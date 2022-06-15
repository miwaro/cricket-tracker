import React from 'react';
import { MuiThemeProvider, createTheme, StylesProvider } from '@material-ui/core/styles';
import Header from './containers/Header';
import DartBoard from './containers/DartBoard';
import Checkbox from './components/Checkbox/Checkbox';
import classes from './App.module.css';

const theme = createTheme({

  palette: {
    primary: {
      light: '01579b',
      main: '#424242',
      dark: '#4682b4',
      contrastText: '#FFF'
    },
    secondary: {
      light: 'rgb(255 0 0 / 87%)',
      main: '#212121',
      dark: 'rgb(255 0 0 / 87%)',
      contrastText: '#FFF'
    }
  },
  typography: {
    useNextVariants: true,
  }
});


const App = () => {
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
