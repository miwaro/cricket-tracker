import * as actionTypes from './actionTypes';

export const addPlayer = (name) => {
    return {
        type: actionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = (playerIndex) => {
    return {
        type: actionTypes.REMOVE_PLAYER,
        playerIndex,
    };
};

export const updateScore = (playerIndex, scoreIndex) => {
    return {
        type: actionTypes.UPDATE_SCORE,
        playerIndex,
        scoreIndex
    };
};

export const undoMove = (playerIndex, scoreIndex) => {
    return {
        type: actionTypes.UNDO_MOVE,
        playerIndex,
        scoreIndex
    };
};

export const resetBoard = () => {
    return {
        type: actionTypes.RESET_BOARD
    };
};

export const resetScores = () => {
    return {
        type: actionTypes.RESET_SCORES
    };
};

export const modifyLabels = (labelIndex, operation) => {
    return {
        type: actionTypes.MODIFY_LABELS,
        labelIndex,
        operation
    };
};

export const randomizeLabels = () => {
    return {
        type: actionTypes.RANDOMIZE_LABELS
    };
};

export const randomizePlayersOrder = () => {
    return {
        type: actionTypes.RANDOMIZE_PLAYERS_ORDER
    };
};

export const toggleMute = () => {
    return {
        type: actionTypes.TOGGLE_MUTE
    };
};
