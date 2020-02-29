// import React, { Component } from 'react';
// import DartBoardPlayer from './DartBoardPlayer/DartBoardPlayer';
// import Modal from '../Modal/Modal';
// import classes from './DartBoardPlayers.module.css';
// import { connect } from 'react-redux';
// import { addPlayer } from '../../store/actions/addPlayer';

// class dartBoardPlayers extends Component {

//     addPlayerHandler = () => {
//         const name = window.prompt('Please Enter Your Name')
//         this.props.onPlayerAdded(name);
//     }

//     render() {
//         const dartBoardPlayer = (
//             <div className={classes.dartBoardPlayers}>
//                 {this.props.players.map((player, i) => (
//                     <DartBoardPlayer 
//                         key={i}
//                         player={player}
//                     />
//                 ))}             
//             </div>
//         );
//         return (
//             <>
//                 <Modal />
//                 {dartBoardPlayer}
//                 <button onClick={this.addPlayerHandler}>test</button>
//                 {/* <div>{this.props.players.length}</div> */}
//             </>
//         );
//     }
// };

// const mapStateToProps = state => {
//     return {
//         players: state.players
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onPlayerAdded: (name) => dispatch(addPlayer(name)),
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayers);