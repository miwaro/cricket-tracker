import React, { Component } from 'react';
import classes from './DartBoardPlayerControl.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


class dartBoardPlayerControl extends Component {

    componentWillMount() {
        this.setIcon();
    }

    icon;
    
    setIcon = () => {
 
        switch(this.props.score) {
        case 0:
            return this.icon = <AddCircleOutlineIcon style={{ cursor: 'pointer', fontSize: '60' }}/>;
        case 1:
            return this.icon = <div style={{color: "#9C2751"}}>/</div>;
        case 2:
            return this.icon = <CloseIcon color='secondary' style={{fontSize: '60'}}/>;
        case 3:
            return this.icon = <HighlightOffIcon color='secondary' style={{fontSize: '60'}}/>;
        default:
            this.icon = <AddCircleOutlineIcon style={{ cursor: 'pointer', fontSize: '60' }}/>;
        }
    }

    render(){
       
        return(
            <div className={classes.DartBoardPlayerControl}>
               {this.icon}
            </div>
        )
    }
}

export default dartBoardPlayerControl;