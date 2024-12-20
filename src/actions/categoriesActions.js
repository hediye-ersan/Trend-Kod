// categoriesActions.js
import axios from 'axios';
import { setCategories } from './action';

// Action Types
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

// Action Creators
export const fetchCategoriesRequest = () => ({ type: FETCH_CATEGORIES_REQUEST });
export const fetchCategoriesSuccess = (categories) => ({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
export const fetchCategoriesFailure = (error) => ({ type: FETCH_CATEGORIES_FAILURE, payload: error });

// Thunk Action
export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/categories');
    const sortedCategories = response.data
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    dispatch(fetchCategoriesSuccess(sortedCategories));
    dispatch(setCategories(sortedCategories)); // Ensure categories are set
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};
