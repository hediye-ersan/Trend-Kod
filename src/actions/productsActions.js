import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products, total) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products, total }
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const fetchProducts = (query = '', page = 1, limit = 10) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const offset = (page - 1) * limit; // Offset hesaplama
      const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products?${query}&limit=${limit}&offset=${offset}`);
      const { products, total } = response.data;
      dispatch(fetchProductsSuccess(products, total));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

export const fetchProductDetails = (productId) => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products/${productId}`);
    console.log('API Response:', response.data);
    dispatch({
      type: FETCH_PRODUCT_DETAILS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching product details:', error.message);
    dispatch(fetchProductsFailure(error.message));
  }
};

