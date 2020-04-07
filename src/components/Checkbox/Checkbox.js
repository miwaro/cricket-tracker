import React from 'react'
import { connect } from 'react-redux';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import Switch from '@material-ui/core/Switch';

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
              <label>MUTE SFX</label>
        </div>
        
            // <FormGroup className={classes.group}>
            //      <FormControlLabel
            //         className={classes.checkbox}
            //         control={<Switch
            //             className={classes.input}
            //             checked={props.muted} 
            //             onChange={toggleMuteHandler} 
            //             />}
            //             label="MUTE"
            //     />
            // </FormGroup>
               
    );
}

const mapStateToProps = state => {
    return {muted: state.muted}
}

const mapDispatchToProps = dispatch => {
    return {onToggleMute: () => dispatch(toggleMute())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
