import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import App from './App';
import './App.css';

const rootReducer = combineReducers({form: formReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

ReactDOM.render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
