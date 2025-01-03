import axiosInstance from '../utils/axiosInstance.js';

export const CREATE_ORDER_START = "CREATE_ORDER_START";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL";

export const createOrder = (orderData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_START });
    try {
        const response = await axiosInstance.post('/order', orderData);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
        return response.data;
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: error.message });
        throw error;
    }
};
