import React from 'react';
import DartBoardItem from './DartBoardItem/DartBoardItem';
import PlayersBox from './PlayersBox/PlayersBox';

const labels = [
    { target: '20'},
    { target: '19'},
    { target: '18'},
    { target: '17'},
    { target: '16'},
    { target: '15'},
    { target: 'B'}
];

const DartBoardStatic = () => {

    return (
        <div className="Label-style">
            <PlayersBox />
            {labels.map(label => (
                <DartBoardItem
                    key={label.target}
                    label={label.target}
                />     
            ))}
        </div>
    ) 
}
    
export default DartBoardStatic;