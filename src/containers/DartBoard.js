import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DartBoardStatic from '../components/DartBoardStatic/DartBoardStatic';
import DartBoardPlayers from '../components/DartBoardPlayers/DartBoardPlayers';

const styles = {
    root: { 
        backgroundColor: '#0a1f1f',
        color: '#e2e2e2',
        borderRadius: 20,
        opacity: .93,
        border: '8px solid #e2e2e2'
    }
}

const dartBoard = (props) => {
    const { classes } = props;
    let p = props.players.length
    return (
        <div style={{margin: 'auto', width: p === 0 ? '33%': p === 1 ? '75%': '100%'}}>
            <Grid className={classes.root} item xs={12}>
                <Grid container spacing={0}>
                    <Grid item xs={p === 0 ? 12 : 3 } >
                        <DartBoardStatic />
                    </Grid>
                    <Grid item xs={9}>
                        <DartBoardPlayers />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        players: state.players
    };
}
   
export default connect(mapStateToProps)(withStyles(styles)(dartBoard));