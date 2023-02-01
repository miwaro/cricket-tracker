import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DartBoardStatic from '../components/DartBoardStatic/DartBoardStatic';
import DartBoardPlayers from '../components/DartBoardPlayers/DartBoardPlayers';
import DartActions from '../components/DartBoardPlayers/DartActions';
import classes from './DartBoard.module.css';

const dartBoard = (props) => {

  return (
    <div className={classes.container}>
      <Grid item xs={12}>
        <Grid container spacing={0}>
          <Grid item xs={props.players.length === 0 ? 12 : 2} >
            <DartBoardStatic />
          </Grid>
          <Grid item xs={10}>
            <DartBoardPlayers />
          </Grid>
          <Button
            style={{
              backgroundColor: 'transparent',
              transition: 'transform .4s',
              position: 'absolute',
              opacity: '.8',
              bottom: '10px',
              right: '10px'
            }}
          >
            <a
              className='iconHover'
              style={{ color: 'white', fontSize: '11px' }}
              href="https://paypal.me/michaelrooze?locale.x=en_US" target="_blank" rel="noopener noreferrer"
            >
              $ Donate
            </a>
          </Button >
        </Grid>
      </Grid>
      <DartActions />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(dartBoard);