import {
    CREATE_ORDER_START,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL
} from '../actions/orderActions';

const initialState = {
    orders: JSON.parse(localStorage.getItem('orders')) || [],
    isLoading: false,
    error: null
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: [...state.orders, action.payload] // Ensure new order is added to the orders array
            };
        case CREATE_ORDER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_ORDERS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: action.payload
            };
        case FETCH_ORDERS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default orderReducer;
