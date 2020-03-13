import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: [],
    history: [],
    labels: [20, 19, 18, 17, 16, 15, 'B'],
    winningPlayerIndex: -1
};

const reducer = ( state = initialState, action) => {

    let player;
    let players;
    let record;

    switch ( action.type ) {

        case actionTypes.MODIFY_LABELS:

            let label = state.labels[action.labelIndex];

            if (action.operation === 'decrement' && label === 1) {
                label = 20;
            } else if (action.operation === 'increment' && label === 20) {
                label = 1;
            } else {
                label = action.operation === 'decrement' ? label -1 : label + 1;
            }
            const labels = state.labels.map((el, i) => i === action.labelIndex ? label : el);

            return {
                ...state,
                labels
            }
        
        case actionTypes.ADD_PLAYER:
            player = {
                name: action.name,
                score: [0, 0, 0, 0, 0, 0, 0]
            }
            players = [...state.players, player]
            return {
                ...state,
                players
            }

        case actionTypes.REMOVE_PLAYER:
            players = state.players.filter((_, i) => i !== action.playerIndex);
            return {
                ...state,
                players
            }

        case actionTypes.UPDATE_SCORE:
            player = state.players[action.playerIndex];
            player.score[action.scoreIndex]++;

            let winningPlayerIndex = -1;
            if (player.score.every(el => el === 3)) {
                winningPlayerIndex = action.playerIndex;
            } 

            players = state.players.slice();
            record = {
                playerIndex: action.playerIndex,
                scoreIndex: action.scoreIndex
            };
            return {
                ...state,
                players,
                history: [...state.history, record],
                winningPlayerIndex
            }

        case actionTypes.RESET_SCORES:
            players = state.players.map(player => {
                player.score = [0, 0, 0, 0, 0, 0, 0];
                return player;
            });
            
            return {
                ...state,
                players,
                winningPlayerIndex: -1,
                history: []
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
                players: [],
                winningPlayerIndex: -1
            } 
                      
        default:
            return state;
    }
};

export default reducer;