import config from './config';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import logger from 'redux-logger';

const store =
  config.ENVIRONMENT === 'dev'
    ? createStore(reducer, compose(applyMiddleware(thunk, logger)))
    : createStore(reducer, compose(applyMiddleware(thunk)));
export default store;
