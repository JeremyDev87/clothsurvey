// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import mainReducer from '../reducers/reducer'
import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [thunk,promiseMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: "root",
    storage,
  };

  const rootReducer = combineReducers({
    mainReducer
  });

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(enhancedReducer,composeEnhancers(applyMiddleware(...middleware)))

export { store }