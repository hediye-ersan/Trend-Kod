// actions/cartActions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';

// Alışveriş sepetine ürün ekleme eylemi
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const increaseProductQuantity = (productId) => ({
  type: INCREASE_PRODUCT_QUANTITY,
  payload: productId,
});
