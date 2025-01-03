import {
    CREATE_ORDER_START,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL
} from '../actions/orderActions';

const initialState = {
    orders: [],
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
                orders: [...state.orders, action.payload]
            };
        case CREATE_ORDER_FAIL:
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
