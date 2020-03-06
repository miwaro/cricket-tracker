import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



class Nav extends Component {

  render() {
    return (

      <div className="Nav-container">
          <Grid container justify="center">
            <Grid item xs={1.5}>
                <Button size="large" className="theme-button-1">
                Add Player
                </Button>
            </Grid>
            <Grid item xs={1.5}>
                <Button size="large" className="theme-button-1">
                    Undo Score
                </Button>
            </Grid>
            <Grid item xs={1.5}>
                <Button size="large" className="theme-button-1">
                    Reset Board
                </Button>
            </Grid>
          </Grid>
      </div>

    );
  }

}

export default Nav;