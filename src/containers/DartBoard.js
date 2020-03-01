import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import DartBoardStatic from '../components/DartBoardStatic/DartBoardStatic';
import DartBoardPlayers from '../components/DartBoardPlayers/DartBoardPlayers';

const styles = {
    root: {
        border: '3px solid #26a69a !important',
    }
}

const dartBoard = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.root} spacing={0}>
            <Grid container spacing={0}>
                <Grid item xs={props.players.length > 0 ? 3 : 12} >
                    <DartBoardStatic />
                </Grid>
                <Grid item xs={props.players.length > 0 ? 9 : 0}>
                    <DartBoardPlayers />
                </Grid>
            </Grid>
        </Card>
    )
};

const mapStateToProps = state => {
    return {
        players: state.players
    };
}
   
export default connect(mapStateToProps)(withStyles(styles)(dartBoard));