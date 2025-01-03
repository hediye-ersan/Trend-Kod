// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import userReducer from '../reducers/userReducer';
import {productReducer} from '../reducers/productReducer';
import shoppingCartReducer from '../reducers/shoppinCartReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import shopCardReducer from '../reducers/shopCardReducer';
import paymentReducer from '../reducers/paymentReducer';
import orderReducer from '../reducers/orderReducer';

const logger = createLogger();

const rootReducer = combineReducers({
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoriesReducer,
    products: productReducer,
    shopCard: shopCardReducer,
    payment: paymentReducer,
    order: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;