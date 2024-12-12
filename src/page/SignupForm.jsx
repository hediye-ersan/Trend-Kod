import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Axios ile verilen URL ile bağlantı kuruluyor
const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const SignupForm = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("customer");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

  const role_id = watch("role_id", "customer"); // role_id değişkenini watch ile takip ediyoruz

  // Axios ile roles verilerini alıyoruz
  useEffect(() => {
    api.get("/roles")
      .then(response => {
        setRoles(response.data);
        // Varsayılan rolü "customer" olarak set et
        if (response.data.length > 0) {
          setSelectedRole("customer");
        }
      })
      .catch(error => {
        console.error("Roles could not be loaded:", error);
      });
  }, []);

  // Watch role_id değişikliklerini, setValue ile formda güncelle
  useEffect(() => {
    setValue("role_id", selectedRole);
  }, [selectedRole, setValue]);

 
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
            role_id: data.role_id,
          };

      // Verileri API'ye gönder
      const response = await api.post("/signup", payload);

      // Başarılı yanıt geldiğinde
      if (response.data?.message) {
        alert(response.data.message); // Başarılı mesajı göster
        history.push("/", { email: data.email, password: data.password }); // LoginForm'a yönlendir
      }
    } catch (error) {
      setError("api", {
        type: "manual",
        message: error.response?.data?.message || "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form space-y-4 p-6 bg-gray-50 rounded-lg shadow-lg">
      {errors.api && <p className="text-red-600 text-sm">{errors.api.message}</p>}

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Name</label>
        <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" id="name"
          {...register('name', { required: true, minLength: 3 })} />
        <p className="text-red-600 text-sm">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Email</label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          id="email"
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
        />
        <p className="text-red-600 text-sm">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Password</label>
        <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" id="password"
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/
          })} />
        <p className="text-red-600 text-sm">{errors.password?.message}</p>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Confirm Password</label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            validate: (value) => value === watch('password') || "Passwords do not match"
          })}
        />
        <p className="text-red-600 text-sm">{errors.confirmPassword?.message}</p>
      </div>

      {/* Role Selection */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Role</label>
        <select
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          {...register("role_id", { required: "Role selection is required" })}
          onChange={(e) => setSelectedRole(e.target.value)}
          value={selectedRole}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.code}>
              {role.name}
            </option>
          ))}
        </select>
        <p className="text-red-600 text-sm">{errors.role_id?.message}</p>
      </div>

      {/* Store Fields (If "Store" is selected) */}
      {selectedRole === "store" && (
        <>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Store Name</label>
            <input
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              {...register("store_name", { required: "Store name is required", minLength: 3 })}
            />
            <p className="text-red-600 text-sm">{errors.store_name?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Store Phone</label>
            <input
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              {...register("store_phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(\+90|0)?5\d{2}(\d{7})$/,
                  message: "Please enter a valid Türkiye phone number",
                },
              })}
            />
            <p className="text-red-600 text-sm">{errors.store_phone?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Tax ID</label>
            <input
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              {...register("tax_no", {
                required: "Tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Tax ID must follow the pattern TXXXXVXXXXXX",
                },
              })}
            />
            <p className="text-red-600 text-sm">{errors.tax_no?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Bank Account</label>
            <input
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              {...register("bank_account", {
                required: "Bank Account is required",
                pattern: {
                  value: /^(TR\d{2}\d{4}\d{16})$/,
                  message: "Please enter a valid IBAN",
                },
              })}
            />
            <p className="text-red-600 text-sm">{errors.bank_account?.message}</p>
          </div>
        </>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignupForm;
