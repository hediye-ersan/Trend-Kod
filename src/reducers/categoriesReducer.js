// categoriesReducer.jsx
const initialState = {
    categories: [],
    loading: false,
    error: null,
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_CATEGORIES_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        loading: false,
        categories: action.payload
      };
    case 'FETCH_CATEGORIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};
  
  export default categoriesReducer;