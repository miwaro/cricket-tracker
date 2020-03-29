import React, { Component } from 'react';

import classes from './DartBoardPlayerControl.module.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';

import like from '../../../../audioclips/notification_simple-01.wav';
import warning from '../../../../audioclips/notification_high-intensity.wav';
import success from '../../../../audioclips/hero_decorative-celebration-01.wav';

import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

class dartBoardPlayerControl extends Component {


    updateScoreHandler = () => {
        if (this.props.score === 3) { return; }
        this.props.onUpdateScore(this.props.scoreIndex)
    }

    render(){
        
        const likeAudio = new Audio(like);
        const warningAudio = new Audio(warning);
        const successAudio = new Audio(success);
      
        
        const playSound = audioFile => {
            audioFile.play();
        }

        return(
            <div className={classes.DartBoardPlayerControl} onClick={this.updateScoreHandler}>
               {this.props.score === 0 && <AddCircleIcon onClick={() => playSound(likeAudio)} style={{ cursor: 'pointer', fontSize: '40'}}/>}
               {this.props.score === 1 && <div onClick={() => playSound(warningAudio)} style={{cursor: 'pointer', color: '#b11111', fontSize: '36'}}>/</div>}
               {this.props.score === 2 && <CloseIcon onClick={() => playSound(successAudio)} style={{fontFamily: 'sans-serif', cursor: 'pointer', fontSize: '40', color: "#ffcc00"}}/>}
               {this.props.score === 3 && <HighlightOffTwoToneIcon color='primary' style={{cursor: 'pointer', fontSize: '40'}}/>}
            </div>
        )
    }
}

export default dartBoardPlayerControl;