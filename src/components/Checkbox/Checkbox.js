import React from 'react'
import { connect } from 'react-redux';
import { toggleMute } from '../../store/actions/actions';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {

    const toggleMuteHandler = () => {
        props.onToggleMute();
    }

    return (
        <div className={classes.checkbox} >
            <input
                name="Mute"
                type="checkbox"
                onChange={toggleMuteHandler}
                checked={props.muted}
            />
            {props.muted ?
                <label>UNMUTE SFX</label> :
                <label>MUTE SFX</label>
            }
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
