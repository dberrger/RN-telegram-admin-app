import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loggingMiddleware from './middleware/logger';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const configureStore = (initialState) => {
  const middleware = applyMiddleware(thunk, loggingMiddleware, logger);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;