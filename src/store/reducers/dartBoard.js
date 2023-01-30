import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: [],
    history: [],
    pointsHistory: [],
    winningPlayerIndex: -1,
    muted: true,
    targets: [
        { target: 15, isClosed: false },
        { target: 16, isClosed: false },
        { target: 17, isClosed: false },
        { target: 18, isClosed: false },
        { target: 19, isClosed: false },
        { target: 20, isClosed: false },
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

        // case actionTypes.RANDOMIZE_LABELS:
        //     map = {};
        //     targets = state.targets.map(label => {
        //         let num = label.target;
        //         num = Math.floor(Math.random() * (60 - 1) + 1);
        //         while (map[num]) {
        //             num = Math.floor(Math.random() * (60 - 1) + 1);
        //         }
        //         map[num] = num;
        //         return { target: num, isClosed: false };
        //     }).sort((a, b) => b - a);

        //     return {
        //         ...state,
        //         targets
        //     }

        case actionTypes.RANDOMIZE_LABELS:

            function generateRandom(min, max, exclude) {
                let random;
                while (!random) {
                    const x = Math.floor(Math.random() * (max - min + 1)) + min;
                    if (exclude.indexOf(x) === -1) random = x;
                }
                return random;
            }

            targets = state.targets.map(target => {
                let newTarget;
                let finalArr = [];
                for (let i = 0; i < 7; i++) {
                    // The third argument in generateRandom are all the values of a single shot in darts that you can not get. 
                    // For example, you can hit a triple 20 which is equal to 60, but there is no shot that will equal 59.
                    newTarget = generateRandom(1, 60, [59, 58, 56, 55, 53, 52, 49, 47, 46, 44, 43, 41, 37, 35, 31, 29, 23]);
                    finalArr.push(newTarget)

                }

                let num = target.target;
                num = newTarget
                // console.log(newTarget)
                return { target: num, isClosed: false }
            })

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
                players,
                targets: [
                    { target: 15, isClosed: false },
                    { target: 16, isClosed: false },
                    { target: 17, isClosed: false },
                    { target: 18, isClosed: false },
                    { target: 19, isClosed: false },
                    { target: 20, isClosed: false },
                    { target: 25, isClosed: false }
                ]
            }

        case actionTypes.REMOVE_PLAYER:
            players = state.players.filter((_, i) => i !== action.playerIndex);
            if (players.length === 0) {
                targets = [
                    { target: 15, isClosed: false },
                    { target: 16, isClosed: false },
                    { target: 17, isClosed: false },
                    { target: 18, isClosed: false },
                    { target: 19, isClosed: false },
                    { target: 20, isClosed: false },
                    { target: 25, isClosed: false }
                ]
            }
            return {
                ...state,
                players,
            }

        case actionTypes.UPDATE_SCORE:
            player = state.players[action.playerIndex];
            player.score[action.scoreIndex]++;
            let maxNum = state.players.length;
            let indexArr = []

            state.players.map((player) => {
                player.score.forEach((target, i) => {
                    if (target >= 3) {
                        indexArr.push(i);
                    }
                })
            })

            let finalArr = [];

            function getOccurrence(array, value) {
                let count = 0;
                array.forEach((v) => (v === value && ++count));
                if (count === maxNum) {
                    finalArr.push(value)
                }
            }

            for (let i = 0; i <= 6; i++) {
                getOccurrence(indexArr, i)
            }

            targets = state.targets;

            if (finalArr.length !== 0 && player.score[action.scoreIndex] >= 3) {
                finalArr.forEach(val => {
                    targets[val].isClosed = true;
                })
            }


            let winningPlayerIndex = -1;
            let playerHasScored = false;
            let allPlayersPointsArr = [];

            state.players.forEach(player => {
                player.score.forEach(hit => {
                    if (hit > 3) {
                        allPlayersPointsArr.push(player.points)
                        allPlayersPointsArr.sort((a, b) => b - a);
                        playerHasScored = true;
                    }
                })
            })

            if (playerHasScored === true && player.score.every(el => el >= 3) && player.points === allPlayersPointsArr[0]) {
                winningPlayerIndex = action.playerIndex;
            }

            if (playerHasScored === false) {
                if (player.score.every(el => el >= 3)) {
                    winningPlayerIndex = action.playerIndex;
                }
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

            if (player.score[action.scoreIndex] >= 3) {
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
                history: [],
            }

        case actionTypes.UNDO_MOVE:
            if (state.winningPlayerIndex > -1) {
                state.winningPlayerIndex = -1;
            }
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


            if (state.players[record.playerIndex].score[record.scoreIndex] < 3) {
                state.targets[record.scoreIndex].isClosed = false;
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
                targets: [
                    { target: 15, isClosed: false },
                    { target: 16, isClosed: false },
                    { target: 17, isClosed: false },
                    { target: 18, isClosed: false },
                    { target: 19, isClosed: false },
                    { target: 20, isClosed: false },
                    { target: 25, isClosed: false }
                ]
            }

        default:
            return state;
    }
};

export default reducer;