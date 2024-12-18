import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../actions/userAction";
import { fetchRolesIfNeeded } from "../actions/thunkAction";
import axios from "axios";
import "../reset.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Axios ile verilen URL ile bağlantı kuruluyor
const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.user.roles);

  // react-hook-form kullanarak form oluşturuyoruz
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "customer", // Varsayılan role burada ayarlanıyor
    },
  });

  useEffect(() => {
    dispatch(fetchRolesIfNeeded());
  }, [dispatch]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Payload'ı oluşturuyoruz, data'dan gelen verilerle
      const payload =
        data.role_id === "store"
          ? {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id,
            store: {
              name: data.store_name,
              phone: data.store_phone,
              tax_no: data.tax_no,
              bank_account: data.bank_account,
            },
          }
          : {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id || "customer",
          };

      // Verileri API'ye gönder
      await dispatch(signupUser(payload));

      toast.success("Signup successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        history.push("/login", { 
          email: data.email, 
          password: data.password 
        });
      }, 3000);

    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
    {/* Görsel Bölümü */}
    <div
      className="w-1/3 bg-cover bg-center rounded-l-lg"
      style={{ backgroundImage: "url('./images/Signupbg.png')" }}
    ></div>
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 bg-white flex flex-col p-12 justify-center rounded-r-lg">
      {errors.api && <p className="text-red-600 text-h6">{errors.api.message}</p>}
      <h2 className="text-h2 font-bold ">Sign In</h2>
      <div className="flex flex-col">
        <label className="font-medium text-secondText">Name</label>
        <input className="border border-[#BDBDBD] bg-[#F9F9F9] rounded-md p-2  " id="name"
          {...register('name', { required: true, minLength: 3 })} />
        <p className="text-red-600 text-h6">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-secondText">Email</label>
        <input
          className="border border-[#BDBDBD] rounded-md p-2 "
          id="email"
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })} />
        <p className="text-red-600 text-h6">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-secondText">Password</label>
        <input className="border border-[#BDBDBD] rounded-md p-2 " id="password"
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/
          })} />
        <p className="text-red-600 text-h6">{errors.password?.message}</p>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-secondText">Confirm Password</label>
        <input
          className="border border-[#BDBDBD] rounded-md p-2 "
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            validate: (value) => value === watch('password') || "Passwords do not match"
          })} />
        <p className="text-red-600 text-h6">{errors.confirmPassword?.message}</p>
      </div>

      {/* Role Selection */}
      <div className="flex flex-col">
        <label className="font-medium text-secondText">Role</label>
        <select
          className="border border-[#BDBDBD] rounded-md p-2 text-secondText"
          {...register("role_id", { required: "Role selection is required" })}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.code}>
              {role.name}
            </option>
          ))}
        </select>
        <p className="text-red-600 text-h6">{errors.role_id?.message}</p>
      </div>

      {/* Store Fields (If "Store" is selected) */}
      {watch("role_id") === "store" && (
        <>
          <div className="flex flex-col">
            <label className="font-medium text-secondText">Store Name</label>
            <input
              className="border border-[#BDBDBD] rounded-md p-2 "
              {...register("store_name", { required: "Store name is required", minLength: 3 })}
            />
            <p className="text-red-600 text-h6">{errors.store_name?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-secondText">Store Phone</label>
            <input
              className="border border-[#BDBDBD] rounded-md p-2 "
              {...register("store_phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(\+90|0)?5\d{2}(\d{7})$/,
                  message: "Please enter a valid Türkiye phone number",
                },
              })}
            />
            <p className="text-red-600 text-h6">{errors.store_phone?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-secondText">Tax ID</label>
            <input
              className="border border-[#BDBDBD] rounded-md p-2"
              {...register("tax_no", {
                required: "Tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Tax ID must follow the pattern TXXXXVXXXXXX",
                },
              })}
            />
            <p className="text-red-600 text-h6">{errors.tax_no?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-secondText">Bank Account</label>
            <input
              className="border border-[#BDBDBD] rounded-md p-2"
              {...register("bank_account", {
                required: "Bank Account is required",
                pattern: {
                  value: /^(TR\d{2}\d{4}\d{16})$/,
                  message: "Please enter a valid IBAN",
                },
              })}
            />
            <p className="text-red-600 text-h6">{errors.bank_account?.message}</p>
          </div>
        </>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blueText text-white  font-bold py-2 mt-2 mb-6 px-4 rounded-md hover:bg-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>
      <div className="text-center">
          <p className="text-sm">
            Already a member?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
    </form>
    </div>
  );
};

export default SignupForm;
