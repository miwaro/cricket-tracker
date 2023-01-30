import React from 'react'
import { connect } from 'react-redux';
import { toggleMute } from '../../store/actions/actions';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {

    const toggleMuteHandler = () => {
        props.onToggleMute();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
            <div className={classes.checkbox} >
                <input
                    name="Mute"
                    type="checkbox"
                    onChange={toggleMuteHandler}
                    checked={props.muted}
                />
                {props.muted ?
                    <label style={{ padding: '10px' }}>Un-Mute SFX</label> :
                    <label style={{ padding: '10px' }}>Mute SFX</label>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { muted: state.muted }
}

const mapDispatchToProps = dispatch => {
    return { onToggleMute: () => dispatch(toggleMute()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
