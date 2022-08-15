import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Rules from './Rules';
import DialogActions from '@material-ui/core/DialogActions';


class RulesSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            right: false,
            item: null,
        };
    }

    handleClose = () => {
        this.setState({ ...this.state, right: false });
    }

    child = (anchor) => (
        <div
            style={{ width: '350px', padding: '10px 20px' }}
            role="presentation"
        >
            <h2 className='sidebar-title'>Rules</h2>
            <section >
                <Rules />
            </section>
            <DialogActions className='close-button'>
                <Button onClick={this.handleClose} style={{ backgroundColor: 'steelblue', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                    Close
                </Button>

            </DialogActions>

        </div>
    );


    toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ ...this.state, [anchor]: open });
    };

    render() {
        return (
            <div>
                {['right'].map((anchor) => (
                    <Fragment key={anchor}>

                        <button
                            className='redButton'
                            onClick={this.toggleDrawer(anchor, true)}
                            style={{
                                cursor: 'pointer'
                            }}>
                            Game<br />Rules

                        </button>


                        <SwipeableDrawer
                            anchor={anchor}
                            open={this.state[anchor]}
                            onClose={this.toggleDrawer(anchor, false)}
                            onOpen={this.toggleDrawer(anchor, true)}
                        >
                            {this.child(anchor)}
                        </SwipeableDrawer>

                    </Fragment>
                ))}
            </div>
        );
    }
}

export default RulesSidebar;
