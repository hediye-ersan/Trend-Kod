import {
      
    FETCH_USER_CARDS,
    ADD_USER_CARD,
    UPDATE_USER_CARD,
    DELETE_USER_CARD,
  } from '../actions/paymentActions';
  
  const initialState = {
        creditCards: [], // Kullanıcı ödeme kartları
  };
  
  const shopCardReducer = (state = initialState, action) => {
    switch (action.type) {
      // Kullanıcı kartlarını listeleme
      case FETCH_USER_CARDS:
        return {
          ...state,
          creditCards: action.payload,
        };
  
      // Yeni kart ekleme
      case ADD_USER_CARD:
        return {
          ...state,
          creditCards: [...state.creditCards, action.payload],
        };
  
      // Mevcut kartı güncelleme
      case UPDATE_USER_CARD:
        return {
          ...state,
          creditCards: state.creditCards.map((card) =>
            card.id === action.payload.id ? action.payload : card
          ),
        };
  
      // Kart silme
      case DELETE_USER_CARD:
        return {
          ...state,
          creditCards: state.creditCards.filter(
            (card) => card.id !== action.payload
          ),
        };
  
      // Varsayılan durum
      default:
        return state;
    }
  };
  
  export default shopCardReducer;
  