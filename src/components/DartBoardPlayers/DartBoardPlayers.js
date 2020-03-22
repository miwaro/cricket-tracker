import React, { Component } from 'react';
import { connect } from 'react-redux';

import { randomizePlayersOrder } from '../../store/actions/actions';
import UndoMove from '../NavBar/NavButtons/UndoMove';
import Button from '@material-ui/core/Button';
import ResetBoard from '../NavBar/NavButtons/ResetBoard';
import DartBoardPlayer from './DartBoardPlayer/DartBoardPlayer';
import classes from './DartBoardPlayers.module.css';

class dartBoardPlayers extends Component {

    randomizePlayersHandler = () => {
        this.props.onRandomizePlayers();
    }

    render() {
        return (
        <>
            <div className={classes.dartBoardPlayers}>
                {this.props.players.map((player, i) => (
                    <DartBoardPlayer
                        player={player}
                        playerIndex={i}
                        key={i}   
                    />
                ))}             
            </div>
            
            

            {this.props.players.length > 0 && <div className={classes.randomizePlayers}>
                <UndoMove />
                <Button 
                    variant="contained"
                    color='primary'
                    onClick={this.randomizePlayersHandler}>
                    RANDOMIZE PLAYERS
                </Button>
          
                <ResetBoard />  
            </div>}
            
        </>
        );
    };
};

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRandomizePlayers: () => dispatch(randomizePlayersOrder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayers);