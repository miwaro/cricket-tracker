import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import DartBoard from './components/DartBoard';


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
    fontFamily: ['Spicy Rice', 'cursive']
  }
});

const styles = {
  h1: {
    fontSize: 72,
    fontWeight: 600,
    margin: '2rem auto',
    textAlign: 'center'
  }
}

const App = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Typography children={'Bar Darts'} variant={'h1'} className={classes.h1}/>
      <Container> 
        <DartBoard />
      </Container>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
