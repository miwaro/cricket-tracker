import React from 'react';

import AddPlayer from '../../NavBar/NavButtons/AddPlayer/AddPlayer';
import classes from './PlayersBox.module.css';

const PlayersBox = props => {

    return(  
            <div className={classes.PlayersBox}>
                <AddPlayer />
            </div> 
    );
}

export default PlayersBox;
