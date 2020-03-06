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
    const { classes } = props;
    let p = props.players.length
    return (
        // <Grid className={classes.root} item xs={p === 0 ? 3 : 12 }>
        //     <Grid container spacing={0}>
        //         <Grid item xs={p === 0 ? 12 : p === 1 ? 6 : p === 2 ? 4 : 3} >
        //             <DartBoardStatic />
        //         </Grid>
        //         <Grid item xs={p === 1 ? 6 : p === 2 ? 4 : 3}>
        //             <DartBoardPlayers />
        //         </Grid>
        //     </Grid>
        // </Grid>

        <Grid className={classes.root} item xs={p < 1 ? 3: 12}>
            <Grid container spacing={0}>
                <Grid item xs={p === 0 ? 12 : p === 1 ? 6 : p === 2 ? 4 : p > 3 ? 2 : 3} >
                    <DartBoardStatic />
                </Grid>
                <Grid item xs={p === 1 ? 6 : p === 2 ? 4 : p > 3 ? 2 : 3}>
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