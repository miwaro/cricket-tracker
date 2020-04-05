import React from 'react';
import { connect } from 'react-redux';

import { randomizeLabels } from '../../store/actions/actions';
import DartBoardItem from './DartBoardItem/DartBoardItem';
import Button from '@material-ui/core/Button';
import PlayersBox from './PlayersBox/PlayersBox';
import classes from '../DartBoardPlayers/DartBoardPlayer/DartBoardPlayer.module.css';
import reset from '../../audioclips/randomize.wav';


const DartBoardStatic = (props) => {

    const randomizeLabelHandler = () => {
        props.onRandomizeLabels();
        playSound(resetAudio);
    }

    const resetAudio = new Audio(reset);
      
    const playSound = audioFile => {if (!props.muted) audioFile.play();}
    
        return (
      
            <div className="Label-style">

                <PlayersBox />

                    {props.labels.map((label, i) => (
                        <DartBoardItem
                            key={i}
                            label={label}
                            labelIndex={i}
                        /> 
                    ))}

                <div className={classes.randomizeTargets}>
                        <Button
                            variant="contained"
                            color='primary'
                            onClick={randomizeLabelHandler}>
                            Randomize
                        </Button>
                </div>    
            </div>  
        );
}

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history,
        labels: state.labels,
        muted: state.muted
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        onRandomizeLabels: () => dispatch(randomizeLabels())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DartBoardStatic);