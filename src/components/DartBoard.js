import React from 'react';
import { Card, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DartBoardLabels from './DartBoardLabels';

const styles = {
    root: {
        minHeight: 500
    }
  }

const dartBoard = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.root}>
            <Paper variant={'outlined'} elevation={3}>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <DartBoardLabels />
                    </Grid>
                    <Grid item xs={9}>
          
                    </Grid>
                </Grid>
            </Paper>
        </Card>
    )
};
   
export default withStyles(styles)(dartBoard);