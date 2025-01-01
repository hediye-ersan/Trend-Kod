// reducers/userReducer.js

const initialState = {
  user: null,  // Kullanıcı bilgisi
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: '',
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
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SIGNUP_REQUEST":
      return { ...state, loading: true, error: null };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.token
      };
    case "SIGNUP_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
    case "FETCH_ADDRESSES_SUCCESS":
      return { ...state, addressList: action.payload };
    case "FETCH_ADDRESSES_FAILURE":
      return { ...state, error: action.payload };
  };
}
export default userReducer;