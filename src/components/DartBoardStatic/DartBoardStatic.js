import React, {Component} from 'react';
import { connect } from 'react-redux';

import { randomizeLabels } from '../../store/actions/actions';
import DartBoardItem from './DartBoardItem/DartBoardItem';
import Button from '@material-ui/core/Button';
import PlayersBox from './PlayersBox/PlayersBox';
import classes from '../DartBoardPlayers/DartBoardPlayer/DartBoardPlayer.module.css';


class dartBoardStatic extends Component {

    randomizeLabelHandler = () => {
        this.props.onRandomizeLabels();
    }

    render(){
        return (
      
            <div className="Label-style">

                <PlayersBox />

                {this.props.labels.map((label, i) => (
                    <DartBoardItem
                        key={i}
                        label={label}
                        labelIndex={i}
                    /> 
                ))}

                <div className={classes.randomizeTargets}>
                        <Button
                        variant="contained"
                        color='primary'
                        onClick={this.randomizeLabelHandler}>
                            Randomize
                        </Button>
                </div>    
            </div>
    
        )
    }
};

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history,
        labels: state.labels
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        onRandomizeLabels: () => dispatch(randomizeLabels())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardStatic);