import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DartBoardStatic from '../components/DartBoardStatic/DartBoardStatic';
import DartBoardPlayers from '../components/DartBoardPlayers/DartBoardPlayers';

const styles = {
    root: {
        backgroundColor: '#000',
        color: '#FFF',
        borderRadius: '12px',
        opacity: .9,
        borderLeft: '2px solid steelblue',
        borderTop: '2px solid steelblue',
        borderRight: '2px solid steelblue'
    }
}

const dartBoard = (props) => {
    const { classes } = props;
    let p = props.players.length
    return (

        <div style={{ margin: 'auto', width: p === 0 ? '40%' : '100%' }}>
            <Grid className={classes.root} item xs={12}>
                <Grid container spacing={0}>
                    <Grid item xs={p === 0 ? 12 : 3} >
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