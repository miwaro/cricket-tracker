import React, { Component } from 'react';
import classes from './DartBoardItem.module.css';


class DartBoardItem extends Component {
    // state = {
    //     type: '',
    //     content: '',
    // }

    render() {
        return(  
            <div className={classes.DartBoardItem}>
                {this.props.label} 
            </div>
        );
    }

}

export default DartBoardItem;