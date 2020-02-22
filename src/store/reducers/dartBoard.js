import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: []
};

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_PLAYER:
            const player = {
                name: action.name,
                score: [0, 0 , 0 , 0, 0 , 0, 0]
            }
            const players = [...state.players, player];
            return {
                ...state,
                players
            }
        default:
            return state;
    }
};

export default reducer;