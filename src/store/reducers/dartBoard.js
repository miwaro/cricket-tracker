import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: [],
    history: [],
    pointsHistory: [],
    winningPlayerIndex: -1,
    muted: false,
    targets: [
        { target: 20, isClosed: false },
        { target: 19, isClosed: false },
        { target: 18, isClosed: false },
        { target: 17, isClosed: false },
        { target: 16, isClosed: false },
        { target: 15, isClosed: false },
        { target: 25, isClosed: false }
    ]
};

const reducer = (state = initialState, action) => {

    let player;
    let players;
    let record;
    let targets;
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
            targets = state.targets.map(label => {
                let num = label.target;
                num = Math.floor(Math.random() * (20 - 1) + 1);
                while (map[num]) {
                    num = Math.floor(Math.random() * (20 - 1) + 1);
                }
                map[num] = num;
                return { target: num, isClosed: false };
            }).sort((a, b) => b - a);

            return {
                ...state,
                targets
            }

        case actionTypes.MODIFY_LABELS:

            let label = state.targets[action.labelIndex].target;

            if (action.operation === 'decrement' && label === 1) {
                label = 20;
            } else if (action.operation === 'increment' && label === 20) {
                label = 1;
            } else {
                label = action.operation === 'decrement' ? label - 1 : label + 1;
            }
            targets = state.targets.map((el, i) => i === action.labelIndex ?
                ({ target: label, isClosed: false }) :
                ({ target: el.target, isClosed: false }));

            return {
                ...state,
                targets
            }

        case actionTypes.ADD_PLAYER:
            player = {
                name: action.name,
                score: [0, 0, 0, 0, 0, 0, 0],
                points: 0
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
            let maxNum = state.players.length;
            let indexArr = []

            state.players.map((player) => {
                player.score.forEach((target, i) => {
                    if (target >= 2) {
                        indexArr.push(i);
                    }
                })
            })

            let finalArr = [];

            function getOccurrence(array, value) {
                let count = 0;
                array.forEach((v) => (v === value && count++));
                if (count === maxNum) {
                    finalArr.push(value)
                }
            }

            // Obviously, the numerous function calls here are not ideal.
            getOccurrence(indexArr, 0)
            getOccurrence(indexArr, 1)
            getOccurrence(indexArr, 2)
            getOccurrence(indexArr, 3)
            getOccurrence(indexArr, 4)
            getOccurrence(indexArr, 5)
            getOccurrence(indexArr, 6)

            targets = state.targets;

            if (finalArr.length !== 0) {
                finalArr.forEach(val => {
                    targets[val].isClosed = true;
                })
            }

            player.score[action.scoreIndex]++;

            let winningPlayerIndex = -1;
            if (player.score.every(el => el >= 3)) {
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
                winningPlayerIndex,
            }

        case actionTypes.UPDATE_POINTS:
            targets = state.targets;
            player = state.players[action.playerIndex];

            if (player.score[action.scoreIndex] > 3) {
                player.points += targets[action.scoreIndex].target
                players = state.players.slice();
                record = {
                    playerIndex: action.playerIndex,
                    scoreIndex: action.scoreIndex
                };
            }

            return {
                ...state,
                pointsHistory: [...state.pointsHistory, record],
            }

        case actionTypes.RESET_SCORES:
            players = state.players.map(player => {
                player.score = [0, 0, 0, 0, 0, 0, 0];
                player.points = 0;
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
            if (state.pointsHistory.length === 0) { return; }
            record = state.history.pop();
            let pointsRecord = state.pointsHistory.pop();
            let target = state.players[record.playerIndex].score[record.scoreIndex];
            if (target > 0) {
                state.players[record.playerIndex].score[record.scoreIndex]--;
            }
            if (pointsRecord) {
                player = state.players[pointsRecord.playerIndex];
                let lastTarget = state.targets[pointsRecord.scoreIndex];
                let pointTotal = player.points - lastTarget.target;
                player.points = pointTotal;
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
                player.points = 0;
                return player;
            });
            return {
                ...state,
                players,
                winningPlayerIndex: -1,
                targets: [20, 19, 18, 17, 16, 15, 25]
            }

        default:
            return state;
    }
};

export default reducer;