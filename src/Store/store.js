// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { createLogger } from 'redux-logger';
import clientReducer from '../reducers/clientReducer';
import productReducer from '../reducers/productReducer';
import shoppingCartReducer from '../reducers/shoppinCartReducer';

const logger = createLogger();

const rootReducer = combineReducers({
    client: clientReducer, 
    product: productReducer,
    shoppingCart: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;