import axiosInstance from '../utils/axiosInstance.js';

export const CREATE_ORDER_START = "CREATE_ORDER_START";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL";

export const FETCH_ORDERS_START = "FETCH_ORDERS_START";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";

export const createOrder = (orderData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_START });
    try {
        const response = await axiosInstance.post('/order', orderData);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data }); // Ensure payload contains the new order data
        return response.data;
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: error.message });
        throw error;
    }
};

export const fetchOrders = (userEmail) => async (dispatch) => {
    dispatch({ type: FETCH_ORDERS_START });
    try {
        const response = await axiosInstance.get(`/order?email=${userEmail}`);
        localStorage.setItem('orders', JSON.stringify(response.data));
        dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ORDERS_FAIL, payload: error.message });
    }
};
