import { applyMiddleware, createStore } from 'redux';
import todoReducer from './reducers/todoReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let store = createStore(
    todoReducer,
    applyMiddleware(logger,thunk)
    );

export default store;

