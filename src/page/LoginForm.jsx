import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction"; // loginUser thunk action'ı
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  const history = useHistory();

  // Redux'dan kullanıcı bilgisini ve yükleniyor durumunu al
  const user = useSelector((state) => state.user.user);
  const loadingState = useSelector((state) => state.user.loading);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await dispatch(loginUser(email, password, rememberMe));

      // Eğer login başarılıysa
      if (response.type === "LOGIN_SUCCESS") {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // 3 saniye sonra ana sayfaya yönlendir
        setTimeout(() => {
          history.push("/"); // Yönlendirme
        }, 3000);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "An error occurred. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const historyToSignup = () => {
    history.push("/signup"); // Signup sayfasına yönlendir
  };



  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./images/loginbg.png')" }}
    >
      <form onSubmit={handleLogin} className="flex flex-col gap-4 ">
        <h2 className="text-h2 font-bold">Log In</h2>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-secondText">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#BDBDBD] rounded-md p-2 "
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium text-secondText">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#BDBDBD] rounded-md p-2 "
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="h-5 w-5"
          />
          <label htmlFor="rememberMe" className="text-sm">Remember me</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-blueText text-white rounded-md hover:bg-blue-500  font-bold ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
        <div className="text-center ">
          <p className="text-sm">
            <span>Don't have an account? </span>
            <button
              type="button"
              onClick={historyToSignup}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
