import axios from "axios";
import { setUser, setFetchState } from "./actions/action"; // Mevcut actionları kullanıyoruz

export const loginUser = (email, password, rememberMe) => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        { email, password }
      );

      const { user, token } = response.data;

      // Eğer "Remember Me" işaretliyse token'ı localStorage’a kaydet
      if (rememberMe) {
        localStorage.setItem("authToken", token);
      }

      dispatch(setUser(user)); // Kullanıcı bilgisini Redux'a kaydet
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Login failed:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};
