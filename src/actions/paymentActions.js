import axios from 'axios';

export const FETCH_USER_CARDS = 'FETCH_USER_CARDS';
export const ADD_USER_CARD = 'ADD_USER_CARD';
export const UPDATE_USER_CARD = 'UPDATE_USER_CARD';
export const DELETE_USER_CARD = 'DELETE_USER_CARD';

const token = localStorage.getItem('authToken');

// Kullanıcı kartlarını listeleme
export const fetchCreditCards = () => async (dispatch) => {

    try {
        const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/user/card', { headers: { Authorization: `${token}` } });
        dispatch({
            type: FETCH_USER_CARDS,
            payload: response.data,
        });
    } catch (error) {
        console.error('Kartları getirirken hata:', error);
    }
};

// Yeni kart ekleme
export const addUserCard = (cardData) => async (dispatch) => {
    try {
        const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/user/card', cardData, { headers: { Authorization: `${token}` } });
        dispatch({
            type: ADD_USER_CARD,
            payload: response.data,
        });
        alert('Kart başarıyla eklendi!');
    } catch (error) {
        console.error('Kart eklerken hata:', error);
        alert('Kart eklenirken bir hata oluştu.');
    }
};

// Mevcut kartı güncelleme
export const updateUserCard = (cardData) => async (dispatch) => {
    try {
        const response = await axios.put('https://workintech-fe-ecommerce.onrender.com/user/card', cardData, { headers: { Authorization: `${token}` } });
        dispatch({
            type: UPDATE_USER_CARD,
            payload: response.data,
        });
        alert('Kart başarıyla güncellendi!');
    } catch (error) {
        console.error('Kart güncellenirken hata:', error);
        alert('Kart güncellenirken bir hata oluştu.');
    }
};

// Kart silme
export const deleteUserCard = (cardId) => async (dispatch) => {
    try {
        await axios.delete(`https://workintech-fe-ecommerce.onrender.com/user/card/${cardId}`, { headers: { Authorization: `${token}` } });
        dispatch({
            type: DELETE_USER_CARD,
            payload: cardId,
        });
        alert('Kart başarıyla silindi!');
    } catch (error) {
        console.error('Kart silinirken hata:', error);
        alert('Kart silinirken bir hata oluştu.');
    }
};
