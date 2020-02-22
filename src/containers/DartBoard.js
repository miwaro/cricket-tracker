import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DartBoardStatic from '../components/DartBoardStatic/DartBoardStatic';
import DartBoardPlayers from '../components/DartBoardPlayers/DartBoardPlayers';

const styles = {
    root: {
        minHeight: 500,
        border: '5px solid #26a69a !important' 
    }
}

const dartBoard = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.root} spacing={3}>
            <Grid container spacing={0}>
                <Grid item xs={3} >
                    <DartBoardStatic />
                </Grid>
                <Grid item xs={9}>
                    <DartBoardPlayers />
                </Grid>
            </Grid>
        </Card>
    )
};
   
export default withStyles(styles)(dartBoard);