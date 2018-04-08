import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { AsyncStorage } from 'react-native';
import loggingMiddleware from './middleware/logger';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'

const logger = createLogger();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['loginReducer']
};
const persist = persistReducer(persistConfig, rootReducer);



const configureStore = (initialState) => {
const middleware = applyMiddleware(thunk, loggingMiddleware, logger);

  return createStore(persist, initialState, middleware);
};

export const store = configureStore({});
export const persistor = persistStore(store);