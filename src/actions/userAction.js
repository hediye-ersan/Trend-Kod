// actions/userActions.js
import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./userActionTypes";

// Kullanıcı Bilgisi Set Etme
export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

// Kullanıcı Bilgisi Temizleme
export const clearUser = () => ({
  type: "CLEAR_USER",
});

// Login Başarı Durumunda
export const loginUser = (email, password, rememberMe) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        { email, password }
      );

      // API yanıtını kontrol et
      console.log("API yanıtı:", response);

      // Yanıttan kullanıcı bilgilerini çıkar
      const user = {
        name: response.data.name,
        email: response.data.email,
        role_id: response.data.role_id,
       
      };
      const token = response.data.token;

      // Kullanıcı ve token'ı doğru döndüğünden emin ol
      console.log("Kullanıcı:", user);
      console.log("Token:", token);

      // "Remember Me" kutucuğu işaretliyse token'ı localStorage'a kaydet
      if (rememberMe) {
        localStorage.setItem("authToken", token);
      }

      dispatch(setUser(user)); // Kullanıcı bilgisini Redux'a kaydet
      dispatch({ type: LOGIN_SUCCESS, payload: { user, token } });
    } catch (error) {
      console.error("Login hatası:", error);
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
};

// Logout İşlemi
export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("authToken");
    dispatch(clearUser());
    dispatch({ type: "LOGOUT" });
  };
};
