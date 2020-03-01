import * as actionTypes from './actionTypes';

export const addPlayer = ( name ) => {
    return {
        type: actionTypes.ADD_PLAYER,
        name
    };
};

export const updateScore = ( playerIndex, scoreIndex ) => {
    return {
        type: actionTypes.UPDATE_SCORE,
        playerIndex, 
        scoreIndex
    };
};