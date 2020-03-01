import React from 'react';
import DartBoardItem from './DartBoardItem/DartBoardItem';
import { connect } from 'react-redux';
import { resetBoard } from '../../store/actions/actions';
import Button from '@material-ui/core/Button';
import classes from './DartBoardStatic.module.css';
import PlayersBox from './PlayersBox/PlayersBox';

const labels = [
    { label: '20'},
    { label: '19'},
    { label: '18'},
    { label: '17'},
    { label: '16'},
    { label: '15'},
    { label: 'B'},
];

const DartBoardStatic = (props) => {
    const resetBoardHandler = () => {
        props.onResetBoard();
    }

    return (
        <div className="Label-style">
        <PlayersBox />
        {labels.map(target => (
            <DartBoardItem
                key={target.label}
                label={target.label}
            />     
        ))}
        <div className={classes.newGame}>
                <Button variant="contained" color="secondary" onClick={resetBoardHandler}>
                    New Game
                </Button>
            </div>
    </div>
    ) 
}
    


const mapDispatchToProps = dispatch => {
    return {
        onResetBoard: () => dispatch(resetBoard()),
    }
}

export default connect(null, mapDispatchToProps)(DartBoardStatic);