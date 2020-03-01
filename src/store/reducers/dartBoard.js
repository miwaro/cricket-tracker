import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: []
};

const reducer = ( state = initialState, action) => {
    let player;
    let players;
    switch ( action.type ) {
        case actionTypes.ADD_PLAYER:
            player = {
                name: action.name,
                score: [0, 0 , 0 , 0, 0 , 0, 0]
            }
            players = [...state.players, player];
            return {
                ...state,
                players
            }
        case actionTypes.UPDATE_SCORE:
            player = state.players[action.playerIndex];
            player.score[action.scoreIndex]++;
            players = state.players.slice();
            return {
                ...state,
                players
            }
        case actionTypes.RESET_BOARD:
            return {
                ...state,
                players: []
            }
        default:
            return state;
    }
};

export default reducer;