import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Axios instance
const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const SignupForm = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("customer");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // React Hook Form
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

  const role_id = watch("role_id", "customer");

  // Fetch roles
  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
        // Varsayılan rolü "customer" olarak set et
        if (response.data.length > 0) {
          setSelectedRole("customer");
        }
      } catch (error) {
        console.error("Roles could not be loaded:", error);
      }
    }
    fetchRoles();
  }, []);

  // Watch role_id değişikliklerini, setValue ile formda güncelle
  useEffect(() => {
    setValue("role_id", selectedRole);  // selectedRole'e göre role_id'yi güncelliyoruz
  }, [selectedRole, setValue]);

  // Form submit handler
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
        history.push("/"); // Ana sayfaya yönlendir
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
        <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" {...register("name", { required: "Name is required", minLength: 3 })} />
        <p className="text-red-600 text-sm">{errors.name?.message}</p>
      </div>
      
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Email</label>
        <input
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        <p className="text-red-600 text-sm">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Password</label>
        <input type="password" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" {...register("password", { required: "Password is required" })} />
        <p className="text-red-600 text-sm">{errors.password?.message}</p>
      </div>
      
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          {...register("confirmPassword", {
            required: "Password confirmation is required",
            validate: (value) => value === watch("password") || "Passwords do not match",
          })}
        />
        <p className="text-red-600 text-sm">{errors.confirmPassword?.message}</p>
      </div>
      
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Role</label>
        <select
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          {...register("role_id", { required: "Role selection is required" })}
          onChange={(e) => setSelectedRole(e.target.value)} // Role seçildiğinde selectedRole güncellenir
          value={selectedRole} // selectedRole ile value kontrolü yapılır
        >
          {roles.map((role) => (
            <option key={role.id} value={role.code}>
              {role.name}
            </option>
          ))}
        </select>
        <p className="text-red-600 text-sm">{errors.role_id?.message}</p>
      </div>

      {selectedRole === "store" && (
        <>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Store Name</label>
            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" {...register("store_name", { required: "Store name is required", minLength: 3 })} />
            <p className="text-red-600 text-sm">{errors.store_name?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Store Phone</label>
            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" {...register("store_phone", { required: "Phone number is required" })} />
            <p className="text-red-600 text-sm">{errors.store_phone?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Tax ID</label>
            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" {...register("tax_no", { required: "Tax ID is required" })} />
            <p className="text-red-600 text-sm">{errors.tax_no?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Bank Account</label>
            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" {...register("bank_account", { required: "IBAN is required" })} />
            <p className="text-red-600 text-sm">{errors.bank_account?.message}</p>
          </div>
        </>
      )}

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
