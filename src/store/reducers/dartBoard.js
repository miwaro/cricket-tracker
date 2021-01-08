import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: [],
    history: [],
    labels: [20, 19, 18, 17, 16, 15, '🎯'],
    winningPlayerIndex: -1,
    muted: false
};

const reducer = (state = initialState, action) => {

    let player;
    let players;
    let record;
    let labels;
    let map;

    switch (action.type) {

        case actionTypes.TOGGLE_MUTE:
            return {
                ...state,
                muted: !state.muted
            }

        case actionTypes.RANDOMIZE_PLAYERS_ORDER:

            map = {};
            let max = state.players.length;
            let min = 0;
            // let currentOrder = state.players.map((_, i) => i);
            let randomOrder = state.players.map(() => {
                let num = Math.floor(Math.random() * (max - min) + min);
                while (map[num]) {
                    num = Math.floor(Math.random() * (max - min) + min);
                }
                map[num] = true;
                return num;
            });
            // if (currentOrder[0] === randomOrder[0]) { randomOrder.reverse(); }
            const shuffledPlayers = state.players.map(() => null);
            state.players.forEach((player, i) => {
                const newIndex = randomOrder[i];
                shuffledPlayers[newIndex] = player;
            });

            return {
                ...state,
                players: shuffledPlayers
            }

        case actionTypes.RANDOMIZE_LABELS:

            map = {};
            labels = state.labels.map(label => {
                if (label === '🎯') {
                    return label;
                }
                else {
                    let num = Math.floor(Math.random() * (20 - 1) + 1);
                    while (map[num]) {
                        num = Math.floor(Math.random() * (20 - 1) + 1);
                    }
                    map[num] = num;
                    return num;
                }
            }).sort((a, b) => b - a);

            return {
                ...state,
                labels
            }

        case actionTypes.MODIFY_LABELS:

            let label = state.labels[action.labelIndex];

            if (action.operation === 'decrement' && label === 1) {
                label = 20;
            } else if (action.operation === 'increment' && label === 20) {
                label = 1;
            } else {
                label = action.operation === 'decrement' ? label - 1 : label + 1;
            }
            labels = state.labels.map((el, i) => i === action.labelIndex ? label : el);

            return {
                ...state,
                labels
            }

        case actionTypes.ADD_PLAYER:
            player = {
                name: action.name,
                score: [0, 0, 0, 0, 0, 0, 0],
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
            players = state.players.map(player => {
                player.score = [0, 0, 0, 0, 0, 0, 0];
                player.totalScore = 0;
                return player;
            });
            return {
                ...state,
                players,
                winningPlayerIndex: -1,
                labels: [20, 19, 18, 17, 16, 15, '🎯']
            }

        default:
            return state;
    }
};

export default reducer;