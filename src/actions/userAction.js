// actions/userActions.js
import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_USER,
  CLEAR_USER,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "./userActionTypes";

// Action creator for setting user
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// Action creator for clearing user
export const clearUser = () => ({
  type: CLEAR_USER,
});

// Thunk action creator for login
export const loginUser = (email, password, rememberMe) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    
    try {
      // Make POST request to login endpoint
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        { email, password }
      );

      // Extract user data and token from response
      const { token, ...userData } = response.data;
      
      // Create user object with necessary information
      const user = {
        name: userData.name,
        email: userData.email,
        role_id: userData.role_id,
      };

      // Save token to localStorage if remember me is checked
      if (rememberMe) {
        localStorage.setItem("authToken", token);
      }

      // Update Redux store with user info and token
      const successAction = { type: LOGIN_SUCCESS, payload: { user, token } };
      dispatch(successAction);
      return successAction; // Return the action object for component usage
    } catch (error) {
      // Handle login error
      const errorMessage = error.response?.data?.message || error.message;
      const failureAction = { type: LOGIN_FAILURE, payload: errorMessage };
      dispatch(failureAction);
      throw error; // Re-throw error for component-level handling
    }
  };
};

// Thunk action creator for logout
export const logoutUser = () => {
  return (dispatch) => {
    // Clear token from localStorage
    localStorage.removeItem("authToken");
    
    // Clear user state in Redux
    dispatch({ type: LOGOUT });
  };
};

// Check for existing auth token on app start
export const checkAuthToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("authToken");
    
    if (token) {
      try {
        // Add token to axios headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        
        // Fetch user data using token
        const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/user");
        
        const user = {
          name: response.data.name,
          email: response.data.email,
          role_id: response.data.role_id,
        };
        
        // Update Redux store with user info and token
        dispatch({ type: LOGIN_SUCCESS, payload: { user, token } });
      } catch (error) {
        // Handle invalid token
        localStorage.removeItem("authToken");
        delete axios.defaults.headers.common["Authorization"];
        dispatch({ type: LOGOUT });
      }
    }
  };
};

// Signup action creator
export const signupUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: 'SIGNUP_REQUEST' });
    try {
      const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/signup', userData);
      
      dispatch({ 
        type: 'SIGNUP_SUCCESS', 
        payload: response.data 
      });
      
      return { type: 'SIGNUP_SUCCESS', payload: response.data };
    } catch (error) {
      dispatch({ 
        type: 'SIGNUP_FAILURE', 
        payload: error.response?.data?.message || 'Signup failed' 
      });
      throw error;
    }
  };
};
