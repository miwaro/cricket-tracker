import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addPlayer } from '../../../../store/actions/actions';

import Button from '@material-ui/core/Button';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './AddPlayer.module.css';
import addplayer from '../../../../audioclips/addplayers.wav';
import addplayers from '../../../../audioclips/notification_ambient.wav';

const AddPlayer = (props) => {
    
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    
    const handleClickOpen = () => {
        if (props.players.length > 4) {return;}
            playSound(addplayerAudio);
            setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    const addPlayerHandler = () => {
        if (name === '') { return; }
        playSound(addplayersAudio);
        props.onPlayerAdded(name) && setOpen(false);
    } 

    const addplayerAudio = new Audio(addplayer);
    const addplayersAudio = new Audio(addplayers);
      
    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
        }

    return (
        <div className={classes.addPlayer}>
            < PersonAddSharpIcon 
                style={{ 
                    cursor: 'pointer',
                    fontSize: '65',
                    paddingRight: '10',
                    paddingTop: '5'
                }} 
                onClick={handleClickOpen}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{"Name"}</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Please Enter Your Name
                    </DialogContentText>
                    <TextField
                         onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                              addPlayerHandler();
                              ev.preventDefault();
                            }
                          }}
                        
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="string"
                        fullWidth
                        onChange={e => setName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Nah
                    </Button>
                    <Button onClick={addPlayerHandler} color="primary">
                        Yeah!
                    </Button>
                </DialogActions>
            </Dialog>     
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
        players: state.players,
        muted: state.muted
    }
}
    
const mapDispatchToProps = dispatch => {
    return {
        onPlayerAdded: (name) => dispatch(addPlayer(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);