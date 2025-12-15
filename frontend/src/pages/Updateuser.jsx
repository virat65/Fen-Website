import React, { useState } from "react";
import axios from "axios";
import backendapi from "../backendRouting/userRouting.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import cookie from "js-cookie";

const Updateuser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setUserdata({ ...userdata, photo: e.target.files[0] });
    } else {
      setUserdata({ ...userdata, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const userformdata = new FormData();
      if (userdata.name) userformdata.append("name", userdata.name);
      if (userdata.email) userformdata.append("email", userdata.email);
      if (userdata.phone) userformdata.append("phone", userdata.phone);
      if (userdata.password) userformdata.append("password", userdata.password);
      if (userdata.photo) userformdata.append("photo", userdata.photo);

      const response = await axios.put(
        `${backendapi.updateuser.url}/${id}`,
        userformdata
      );

      if (response.data.status === 200) {
        toast.success(response.data.message);

        // Update cookie
        cookie.set("userinfo", JSON.stringify(response.data.body), {
          path: "/",
        });

        setTimeout(() => navigate("/myprofile"), 1200);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(`Error occured in handleUpdate: ${error}`);
      toast.error("Update failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ width: "420px", borderRadius: "15px" }}
      >
        <h3 className="text-center text-primary mb-4">Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={userdata.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={userdata.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={userdata.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={userdata.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Photo</label>
            <input
              type="file"
              className="form-control"
              name="photo"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 mb-2">
            Update User
          </button>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => navigate("/myprofile")}
          >
            Back to Profile
          </button>
          <button
            type="button"
            className="btn btn-secondary w-100 mt-2"
            onClick={() => navigate("/findallusers")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updateuser;
