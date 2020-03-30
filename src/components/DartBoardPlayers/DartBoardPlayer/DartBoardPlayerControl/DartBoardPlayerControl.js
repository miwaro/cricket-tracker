import React, { Component } from 'react';

import classes from './DartBoardPlayerControl.module.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';

import like from '../../../../audioclips/notification_simple-01.wav';
import warning from '../../../../audioclips/notification_high-intensity.wav';
import success from '../../../../audioclips/hero_decorative-celebration-01.wav';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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

               {this.props.score === 0 && 
                    <AddCircleIcon className={classes.circle} onClick={() => playSound(likeAudio)} 
                        style={{ 
                            }}/>}

               {this.props.score === 1 && 
                    <div onClick={() => playSound(warningAudio)} 
                        style={{
                            fontFamily: 'serif',
                            fontWeight: 'bold',
                            fontStyle: 'italic', 
                            cursor: 'pointer', 
                            color: '#FFF',
                            fontSize: '35'
                        }}> / </div>}
               {this.props.score === 2 && 
                    <CloseIcon onClick={() => playSound(successAudio)} 
                        style={{
                            fontFamily: 'sans-serif', 
                            cursor: 'pointer', 
                            fontSize: '45', 
                            color: "#FFF"}}/>}

               {this.props.score === 3 && 
                    <HighlightOffIcon  
                        style={{
                            cursor: 'pointer',
                            color:'#FFF',
                            fontSize: '50'}}/>}
            </div>
        )
    }
}

export default dartBoardPlayerControl;