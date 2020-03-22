import React from 'react';

import { withStyles } from '@material-ui/core/styles';
// import { Typography } from '@material-ui/core';
import AddPlayer from '../../NavBar/NavButtons/AddPlayer/AddPlayer';


const styles = {
    PlayersBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        borderBottom: '4px solid #dbe4eb'
    },
    h4: {
        fontSize: 35,
        // paddingRight: 24,
        fontFamily: 'Spicy Rice, cursive'
    },
    root: {
        fontSize: 40,
        cursor: 'pointer',
        hover: 'red'
    }
};

const PlayersBox = props => {
    const { classes } = props;

    return(  
        <>
            <div className={classes.PlayersBox}>
                {/* <Typography children={'Players'} variant={'h4'} className={classes.h4}/> */}
                <AddPlayer />
            </div> 
            
        </>
    );
}

export default (withStyles(styles)(PlayersBox));
