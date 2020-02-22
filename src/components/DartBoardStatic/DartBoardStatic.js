import React from 'react';
import DartBoardItem from './DartBoardItem/DartBoardItem';
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

const DartBoardStatic = (props) => (
    <div className="Label-style">
        <PlayersBox />
        {labels.map(target => (
            <DartBoardItem
                key={target.label}
                label={target.label}
            />     
        ))}
        <div className={classes.newGame}>
                <Button variant="contained" color="secondary">New Game</Button>
            </div>
    </div>
);

export default DartBoardStatic;