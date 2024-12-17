const initialState = {
    user: null,  // Kullanıcı bilgisi burada tutulacak
    token: null, // Auth token burada tutulacak
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
        return initialState; // Logout olduğunda state’i sıfırla
      default:
        return state;
    }
  };
  
  export default userReducer;
  