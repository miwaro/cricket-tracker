import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connect } from 'react-redux';
import { addPlayer } from '../../../store/actions/actions';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const 
styles = {
    PlayersBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        height: 90,
        borderBottom: '2px  solid black'
    },
    h4: {
        fontSize: 50,
        paddingRight: 12,
        fontFamily: 'Spicy Rice, cursive'
    },
    root: {
        fontSize: 40,
        cursor: 'pointer',
    }
};


const PlayersBox = props => {
    const { classes } = props;

    
const addPlayerHandler = () => {
    const name = window.prompt('Please Enter Your Name')
    props.onPlayerAdded(name);
    }

    return(  
            <div className={classes.PlayersBox}>
                <Typography children={'Players'} variant={'h4'} className={classes.h4}/>
                <AddCircleOutlineIcon className={classes.root} onClick={addPlayerHandler}/>
            </div> 
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayerAdded: (name) => dispatch(addPlayer(name)),
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(PlayersBox));
