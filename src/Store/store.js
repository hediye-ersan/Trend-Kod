// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { createLogger } from 'redux-logger';
import userReducer from '../reducers/userReducer';
import productReducer from '../reducers/productReducer';
import shoppingCartReducer from '../reducers/shoppinCartReducer';
import categoriesReducer from '../reducers/categoriesReducer';

const logger = createLogger();

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoriesReducer

});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;