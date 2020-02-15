import React, { Component } from 'react';

class newPlayer extends Component {
    state = {

    }



    render() {
        return (
            <div>
                <NewName />
                <Score />
                <UndoButton />
                <NextButton />
            </div>
        )
    }
};

export default newPlayer;
