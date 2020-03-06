import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: [],
    history: []
};

const reducer = ( state = initialState, action) => {
    let player;
    let players;
    let record;
    switch ( action.type ) {
        
        case actionTypes.ADD_PLAYER:
            player = {
                name: action.name,
                score: [0, 0, 0, 0, 0 , 0, 0]
            }
            players = [...state.players, player];
            return {
                ...state,
                players
            }
        case actionTypes.REMOVE_PLAYER:
        
            // const updatedArray = state.players.filter((i, player) => player !== action.playerIndex);
            // players = state.players.filter((_, i) => i !== action.playerIndex);
            players = state.players.filter(function(el, index) {
                return index !== action.playerIndex;})

            return {
                ...state,
                players
            }

        case actionTypes.UPDATE_SCORE:
            player = state.players[action.playerIndex];
            player.score[action.scoreIndex]++;
            players = state.players.slice();
            record = {
                playerIndex: action.playerIndex,
                scoreIndex: action.scoreIndex
            };
            return {
                ...state,
                players,
                history: [...state.history, record]
            }
        
        case actionTypes.UNDO_MOVE:
            if (state.history.length === 0) { return; }
            record = state.history.pop();
            let target = state.players[record.playerIndex].score[record.scoreIndex];
            if (target > 0) {
                state.players[record.playerIndex].score[record.scoreIndex]--;
             }
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