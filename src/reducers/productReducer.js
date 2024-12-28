const initialState = {
  products: [],
  total: 0,
  loading: false,
  error: null,
  productDetails: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        total: action.payload.total
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'FETCH_PRODUCT_DETAILS':
      return {
        ...state,
        loading: false,
        productDetails: action.payload, // Store product details
      };
    default:
      return state;
  }
};