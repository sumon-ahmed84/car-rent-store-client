import React, { use, useState } from "react";
import { toast } from "react-toastify";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login, googleLogin } = use(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

//   const handleForgotPassword = () => {
//     if (!formData.email) return toast.error("Enter your email first");
//     forgotPassword(formData.email);
//   };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[26px] top-4 cursor-pointer z-50 text-lg"
            >
              {showPassword ? <FaEye /> : <IoEyeOff />}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
            //   onClick={handleForgotPassword}
              className="text-sm text-green-700 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Or login with Google</p>
          
          <button onClick={handleGoogle} className="btn w-full mt-2 bg-white text-black border-[#e5e5e5]">
            <FcGoogle />
            Login with Google
          </button>
        </div>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
