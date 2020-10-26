import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers/reducer';
import logger from 'redux-logger';

const store = createStore(
  reducer, applyMiddleware(thunk, logger)
);

export default store;
