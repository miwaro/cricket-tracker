import * as actionTypes from './actionTypes';

export const addPlayer = ( name ) => {
    return {
        type: actionTypes.ADD_PLAYER,
        name
    };
};