// reducers/userReducer.js

const initialState = {
    user: null,  // Kullanıcı bilgisi
    token: null, // Auth token
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return { ...state, loading: true, error: null };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          token: action.payload.token,
        };
      case "LOGIN_FAILURE":
        return { ...state, loading: false, error: action.payload };
      case "LOGOUT":
        return initialState; // Logout olduğunda state sıfırlanır
      case "SET_USER":
        return { ...state, user: action.payload };
      case "CLEAR_USER":
        return { ...state, user: null, token: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  