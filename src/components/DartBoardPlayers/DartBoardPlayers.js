import React, { Component } from 'react';
import DartBoardPlayer from './DartBoardPlayer/DartBoardPlayer';

class dartBoardPlayers extends Component {
    state = {
        players: [
            {
                name: 'Mike',
                active: true,
                board: {
                    '20': 0,
                    '19': 1,
                    '18': 2,
                    '17': 3,
                    '16': 0,
                    '15': 0,
                    'B': 0
                }
            },
            {
                name: 'Mike',
                active: true,
                board: {
                    '20': 0,
                    '19': 1,
                    '18': 2,
                    '17': 3,
                    '16': 0,
                    '15': 0,
                    'B': 0
                }
            },
            {
                name: 'Mike',
                active: true,
                board: {
                    '20': 0,
                    '19': 1,
                    '18': 2,
                    '17': 3,
                    '16': 0,
                    '15': 0,
                    'B': 0
                }
            },
            {
                name: 'Mike',
                active: true,
                board: {
                    '20': 0,
                    '19': 1,
                    '18': 2,
                    '17': 3,
                    '16': 0,
                    '15': 0,
                    'B': 0
                }
            }
        ]
    }

    render() {
        return(
            <div style={{display: 'flex'}}>
                {this.state.players.map((player, i) => (
                    <DartBoardPlayer 
                        key={i}
                        player={player}
                    />
                ))}             
            </div>
        );
    }
};
    

export default dartBoardPlayers;