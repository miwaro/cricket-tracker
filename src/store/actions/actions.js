import * as actionTypes from './actionTypes';

export const addPlayer = ( name ) => {
    return {
        type: actionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = ( playerIndex ) => {
    return {
        type: actionTypes.REMOVE_PLAYER,
        playerIndex,
    };
};

export const updateScore = ( playerIndex, scoreIndex ) => {
    return {
        type: actionTypes.UPDATE_SCORE,
        playerIndex, 
        scoreIndex
    };
};

export const undoMove = ( playerIndex, scoreIndex ) => {
    return {
        type: actionTypes.UNDO_MOVE,
        playerIndex, 
        scoreIndex
    };
};

export const resetBoard = () => {
    return {
        type: actionTypes.RESET_BOARD,
    };
};