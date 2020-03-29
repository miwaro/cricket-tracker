import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AddPlayer from '../../NavBar/NavButtons/AddPlayer/AddPlayer';


const styles = {
    PlayersBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        borderBottom: '4px solid #dbe4eb'
    }
};

const PlayersBox = props => {
    const { classes } = props;

    return(  
        <>
            <div className={classes.PlayersBox}>
                <AddPlayer />
            </div> 
            
        </>
    );
}

export default (withStyles(styles)(PlayersBox));
