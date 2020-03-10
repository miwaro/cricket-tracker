import React, { Component } from 'react';
import classes from './DartBoardPlayerControl.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



class dartBoardPlayerControl extends Component {

    updateScoreHandler = () => {
        if (this.props.score === 3) { return; }
        this.props.onUpdateScore(this.props.scoreIndex)
       
        // console.log(this.props.score)
    }


    
    

    render(){

        // let totalScore = this.props.score.reduce((currentScore, score) => {
        //     return score + currentScore
        // }, 0)
    
        // if (totalScore === 21) {
        //     return <p>you win</p>;
        // }
       
        return(
            <div className={classes.DartBoardPlayerControl} onClick={this.updateScoreHandler}>
               {this.props.score === 0 && <AddCircleOutlineIcon style={{ cursor: 'pointer', fontSize: '60' }}/>}
               {this.props.score === 1 && <div style={{cursor: 'pointer', color: "#1d9500"}}>/</div>}
               {this.props.score === 2 && <CloseIcon style={{cursor: 'pointer', fontSize: '60', color: "#ffcc00"}}/>}
               {this.props.score === 3 && <HighlightOffIcon color='secondary' style={{cursor: 'pointer', fontSize: '60'}}/>}
            </div>
        )
    }
}

export default dartBoardPlayerControl;