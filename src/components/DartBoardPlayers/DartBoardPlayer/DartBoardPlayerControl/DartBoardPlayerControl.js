import React, { Component } from 'react';

import classes from './DartBoardPlayerControl.module.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

class dartBoardPlayerControl extends Component {

    updateScoreHandler = () => {
        if (this.props.score === 3) { return; }
        this.props.onUpdateScore(this.props.scoreIndex)
    }

    render(){

        return(
            <div className={classes.DartBoardPlayerControl} onClick={this.updateScoreHandler}>
               {this.props.score === 0 && <AddCircleIcon style={{ cursor: 'pointer', fontSize: '40' }}/>}
               {this.props.score === 1 && <div style={{cursor: 'pointer', color: '#7b1313', fontSize: 32}}>/</div>}
               {this.props.score === 2 && <CloseIcon style={{fontFamily: 'sans-serif', cursor: 'pointer', fontSize: '40', color: "#ffcc00"}}/>}
               {this.props.score === 3 && <HighlightOffTwoToneIcon color='primary' style={{cursor: 'pointer', fontSize: '40'}}/>}
            </div>
        )
    }
}

export default dartBoardPlayerControl;