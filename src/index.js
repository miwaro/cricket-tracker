import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import dartBoardReducer from './store/reducers/dartBoard';

import './styles/Header.scss';
import './styles/base_styles.scss';
import './styles/index.scss';
import './styles/label_styles.scss';
import './styles/Nav.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     dartBoard: dartBoardReducer
// });

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));


const store = createStore(dartBoardReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
