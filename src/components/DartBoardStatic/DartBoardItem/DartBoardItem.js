import React from 'react';
import classes from './DartBoardItem.module.css';

const DartBoardItem = (props) => (
        <div className={classes.DartBoardItem}>
            {props.label} 
        </div>
);
      
export default DartBoardItem;