import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AddPlayer from '../../NavBar/NavButtons/AddPlayer/AddPlayer';
import classes from './PlayersBox.module.css';

// const styles = {
//     PlayersBox: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 70,
//         borderBottom: '4px solid #FFF'
//     }
// };

const PlayersBox = props => {
    // const { classes } = props;

    return(  
        <>
            <div className={classes.PlayersBox}>
                <AddPlayer />
            </div> 
            
        </>
    );
}

// export default (withStyles(styles)(PlayersBox));
export default PlayersBox;
