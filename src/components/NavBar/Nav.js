import React from 'react';
import Grid from '@material-ui/core/Grid';

// import ResetBoard from './NavButtons/ResetBoard';
import GameOverMessage from '../GameOverMessage/GameOverMessage';

const Nav = () => {

    return (
      <div className="Nav-container">
          <Grid container spacing={2} justify="center">
            {/* <Grid item xs={1.5}>
              <ResetBoard />
            </Grid> */}
          </Grid>
          <GameOverMessage />
      </div>
    );
}

export default Nav;