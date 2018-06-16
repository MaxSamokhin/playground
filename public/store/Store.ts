import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const store: any = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

export default store;
