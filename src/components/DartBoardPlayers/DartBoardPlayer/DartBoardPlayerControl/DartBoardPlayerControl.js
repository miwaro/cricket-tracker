import React, { Component } from 'react';
import classes from './DartBoardPlayerControl.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


class dartBoardPlayerControl extends Component {

    updateScoreHandler = () => {
        if (this.props.score === 3) { return; }
        this.props.onUpdateScore(this.props.scoreIndex)
    }

    render(){
       
        return(
            <div className={classes.DartBoardPlayerControl} onClick={this.updateScoreHandler}>
               {this.props.score === 0 && <AddCircleOutlineIcon style={{ cursor: 'pointer', fontSize: '60' }}/>}
               {this.props.score === 1 && <div style={{cursor: 'pointer', color: "#9C2751"}}>/</div>}
               {this.props.score === 2 && <CloseIcon color='secondary' style={{cursor: 'pointer', fontSize: '60'}}/>}
               {this.props.score === 3 && <HighlightOffIcon color='secondary' style={{cursor: 'pointer', fontSize: '60'}}/>}

            </div>
        )
    }
}

export default dartBoardPlayerControl;