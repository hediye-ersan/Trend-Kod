// thunkActions.js
import { setRoles } from './actions/action';
import axios from 'axios';

export const fetchRoles = () => {
    return async (dispatch) => {
        dispatch(setFetchState('FETCHING'));
        try {
            const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/roles'); // Replace with your API endpoint
            dispatch(setRoles(response.data));
            dispatch(setFetchState('FETCHED'));
        } catch (error) {
            console.error('Failed to fetch roles:', error);
            dispatch(setFetchState('FAILED'));
        }
    };
};