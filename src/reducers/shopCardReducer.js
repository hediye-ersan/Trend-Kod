// reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY } from '../actions/shopCardAction';

const initialState = {
  cartItems: [],
};

const shopCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existingItem = state.cartItems.find(x => x.id === item.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => 
            x.id === existingItem.id ? {...x, quantity: x.quantity + 1} : x
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, {...item, quantity: 1}],
      };

    case INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(x => 
          x.id === action.payload ? {...x, quantity: x.quantity + 1} : x
        ),
      };

    case DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(x => 
          x.id === action.payload && x.quantity > 1 ? {...x, quantity: x.quantity - 1} : x
        ),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default shopCardReducer;
