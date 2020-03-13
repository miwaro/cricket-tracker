import React from 'react';
import { connect } from 'react-redux';

import DartBoardItem from './DartBoardItem/DartBoardItem';
import PlayersBox from './PlayersBox/PlayersBox';

const DartBoardStatic = (props) => {

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
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
        labels: state.labels
    };
}
  
export default connect(mapStateToProps)(DartBoardStatic);