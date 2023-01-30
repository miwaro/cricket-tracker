import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DartBoardStatic from '../components/DartBoardStatic/DartBoardStatic';
import DartBoardPlayers from '../components/DartBoardPlayers/DartBoardPlayers';
import DartActions from '../components/DartBoardPlayers/DartActions';

const styles = {
    root: {
        backgroundColor: '#000',
        color: '#FFF',
        border: '6px double #00fff8de',
        padding: '5px',
        boxShadow: '0 0 12px 12px rgba(63, 156, 175, 0.928)'
    }
}

const dartBoard = (props) => {
    const { classes } = props;
    let p = props.players.length
    return (

        <div style={{ margin: 'auto', width: p === 0 ? '30%' : '90%' }}>
            <Grid className={classes.root} item xs={12}>
                <Grid container spacing={0}>
                    <Grid item xs={p === 0 ? 12 : 3} >
                        <DartBoardStatic />
                    </Grid>
                    <Grid item xs={9}>
                        <DartBoardPlayers />
                    </Grid>
                    <Button
                        style={{
                            backgroundColor: '#00fff8de',
                            transition: 'transform .4s',
                            position: 'absolute',
                            opacity: '.9',
                            bottom: '10px',
                            right: '10px'
                        }}
                    >
                        <a
                            className='iconHover'
                            style={{
                                textDecoration: 'none',
                                color: 'black', fontSize: '11px',
                                fontFamily: 'Audiowide',
                            }}
                            href="https://paypal.me/michaelrooze?locale.x=en_US" target="_blank" rel="noopener noreferrer">
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

export default connect(mapStateToProps)(withStyles(styles)(dartBoard));