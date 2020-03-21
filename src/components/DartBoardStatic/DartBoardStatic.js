import React, {Component} from 'react';
import { connect } from 'react-redux';

import { randomizeLabels } from '../../store/actions/actions';
import { randomizePlayersOrder } from '../../store/actions/actions';
import Button from '@material-ui/core/Button';
import DartBoardItem from './DartBoardItem/DartBoardItem';
import PlayersBox from './PlayersBox/PlayersBox';
import UndoMove from '../NavBar/NavButtons/UndoMove';
import classes from './DartboardStatic.module.css';
import ResetBoard from '../NavBar/NavButtons/ResetBoard';

class dartBoardStatic extends Component {

    randomizeLabelHandler = () => {
        this.props.onRandomizeLabels();
    }

    randomizePlayersHandler = () => {
        this.props.onRandomizePlayers();
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
    
                {this.props.history.length === 0 && 
                    <button 
                        className={classes.randomize}
                        onClick={this.randomizeLabelHandler}>
                            RANDOMIZE TARGETS
                    </button>}
    
                    <ResetBoard />
    
                    <div className={classes.randomize}> 
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.randomizePlayersHandler}
                        style={{ cursor: 'pointer'}}>
                        Randomize Player Order
                    </Button>
                </div>
    
                {this.props.history.length > 0 && <UndoMove />}
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
        onRandomizeLabels: () => dispatch(randomizeLabels()),
        onRandomizePlayers: () => dispatch(randomizePlayersOrder())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardStatic);