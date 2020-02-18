import React, { Component } from 'react';
import classes from './DartBoardPlayerControl.module.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// grab onto props
// get value (20, 19, etc.)
// get score (0-3)
// switch statement on score
// if 0, show + w/ circle
// if 1 show /
// if 2 show X
// if 3 show x w/ circle
class dartBoardPlayerControl extends Component {

    componentWillMount() {
        this.setIcon();
    }

    icon; // JSX (i.e., a Material-UI Icon Component)

    setIcon = () => {
        switch(this.props.score) {
        case 0:
            return this.icon = <AddCircleOutlineIcon className={classes.root} />;
        case 1:
            return this.icon = <div>/</div>
        case 2:
            return this.icon = <div>X</div>
        case 3:
            return this.icon = <div>X With Circle</div>
        default:
            this.icon = <AddCircleOutlineIcon className={classes.root} />;
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