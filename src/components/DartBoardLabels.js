import React from 'react';
import DartBoardItem from '../components/DartBoardItem/DartBoardItem';

const labels = [
    { label: 'Players'},
    { label: '20'},
    { label: '19'},
    { label: '18'},
    { label: '17'},
    { label: '16'},
    { label: '15'},
    { label: 'B'},
];

const DartBoardLabels = (props) => (
    <div>
        {labels.map(target => (
            <DartBoardItem
                key={target.label}
                label={target.label}
            />
        ))}
    </div>
);

export default DartBoardLabels;