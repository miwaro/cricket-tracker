import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import DartBoardStatic from '../components/DartBoardStatic/DartBoardStatic';
import DartBoardPlayers from '../components/DartBoardPlayers/DartBoardPlayers';

const styles = {
    root: {
        
        border: '3px solid #dbe4eb !important',
        backgroundColor: '#081818',
        color: '#e2e2e2',
        borderRadius: 10
    }
}



const dartBoard = (props) => {
    // let p = props.players.length
    const { classes } = props;
    return (
        <Grid className={classes.root} xs={12}>
            <Grid container spacing={0}>
                <Grid item xs={3} >
                    <DartBoardStatic />
                </Grid>
                <Grid item xs={9}>
                    <DartBoardPlayers />
                </Grid>
            </Grid>
        </Grid>
    )
};

const mapStateToProps = state => {
    return {
        players: state.players
    };
}
   
export default connect(mapStateToProps)(withStyles(styles)(dartBoard));