import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backendapi from "../backendRouting/userRouting";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    photo: "",
    role: "user",
    adminkey: "",
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setUserdata({ ...userdata, [name]: files[0] });
    } else {
      setUserdata({ ...userdata, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔐 Admin key validation
    if (
      userdata.role === "admin" &&
      userdata.adminkey !== import.meta.env.VITE_ADMIN_PASS
    ) {
      toast.error("Invalid Admin Key");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", userdata.name);
      formData.append("email", userdata.email);
      formData.append("phone", userdata.phone);
      formData.append("password", userdata.password);
      formData.append("photo", userdata.photo);
      formData.append("role", userdata.role);

      const response = await axios.post(backendapi.signup.url, formData);

      if (response.data.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Signup error:", error);
      toast.error("Signup failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ width: "420px", borderRadius: "15px" }}
      >
        <h3 className="text-center text-primary mb-3">Create Account</h3>

        <form onSubmit={handleSubmit}>
          {/* Role */}
          <div className="mb-3">
            <label className="form-label">Signup As</label>
            <select
              className="form-control"
              name="role"
              value={userdata.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Admin Key */}
          {userdata.role === "admin" && (
            <div className="mb-3">
              <label className="form-label">Admin Key</label>
              <input
                type="password"
                className="form-control"
                name="adminkey"
                placeholder="Enter admin key"
                value={userdata.adminkey}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={userdata.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={userdata.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={userdata.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Photo */}
          <div className="mb-3">
            <label className="form-label">Profile Photo</label>
            <input
              type="file"
              className="form-control"
              name="photo"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="fw-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
