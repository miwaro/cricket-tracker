import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../../../store/actions/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from '../../DartBoardStatic/DartBoardStatic.module.css';


const AddPlayer = (props) => {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    
    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    const addPlayerHandler = () => {
        props.onPlayerAdded(name) && setOpen(false);
    }
    

    return (
        <div className={classes.newGame}>
            <Button variant="contained" color='primary' onClick={handleClickOpen}>
                Add Player
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{"Name"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter Your Name
                    </DialogContentText>
                    <TextField
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
                    <Button onClick={addPlayerHandler} color="primary" autoFocus>
                        Yeah, sure
                    </Button>
                </DialogActions>
            </Dialog>     
        </div>
    ) 
}

// const mapStateToProps = state => {
//     return {
//         players: state.players
//     };
// }
    
const mapDispatchToProps = dispatch => {
    return {
        onPlayerAdded: (name) => dispatch(addPlayer(name))
    }
}



export default connect(null, mapDispatchToProps)(AddPlayer);