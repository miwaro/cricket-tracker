import React from 'react';
import { connect } from 'react-redux';

import { randomizeLabels } from '../../store/actions/actions';
import DartBoardItem from './DartBoardItem/DartBoardItem';
import PlayersBox from './PlayersBox/PlayersBox';
import UndoMove from '../NavBar/NavButtons/UndoMove';
import classes from './DartboardStatic.module.css';

const DartBoardStatic = (props) => {

    const randomizeLabelHandler = () => {
        props.onRandomizeLabels();
    }

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

            {props.history.length === 0 && 
                <button 
                    className={classes.randomize}
                    onClick={randomizeLabelHandler}>
                        Randomize
                </button>}

            {props.history.length > 0 && <UndoMove />}
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history,
        labels: state.labels
    };
}
 
const mapDispatchToProps = dispatch => {
    return {
        onRandomizeLabels: () => dispatch(randomizeLabels())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DartBoardStatic);