import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import backendapi from "../backendRouting/userRouting";
import "react-toastify/dist/ReactToastify.css";
import cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(backendapi.login.url, userdata);

      if (user.data.status === 200) {
        toast.success(user.data.message);
        cookies.set("userinfo", JSON.stringify(user.data.body));
        setTimeout(() => {
          navigate("/");
          // window.location.reload();
        }, 1500); // 1.5 seconds
      } else {
        toast.error(user.data.message);
      }
    } catch (error) {
      toast.error("Login failed");
      console.log("Error occured in loginpage", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <ToastContainer />

      <div
        className="card shadow-lg p-4"
        style={{ width: "380px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-3 text-primary"> Login Here </h3>
        <p className="text-center text-muted mb-4">
          Welcome back! Please login to your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={userdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
          <p className="text-center mb-1">
            Don't have an account ?{" "}
            <Link to="/signup" className="text-primary fw-bold ">
              Signup
            </Link>
          </p>
          <p className="text-center mb-0">
            Back to{" "}
            <Link to="/" className="text-primary fw-bold">
              Home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
