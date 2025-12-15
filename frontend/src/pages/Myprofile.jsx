import React from "react";
import { useNavigate, Link } from "react-router-dom";
import cookies from "js-cookie";
import { toast } from "react-toastify";

const MyProfile = () => {
  const navigate = useNavigate();

  const userCookie = cookies.get("userinfo");
  let user = null;
  if (userCookie) {
    try {
      user = JSON.parse(userCookie);
      console.log(user,"userrr")
    } catch (err) {
      console.error("Invalid cookie data", err);
    }
  }

  const imageLocatino = `http://localhost:1111/images/${user?.photo}`;

  const handleLogout = () => {
    cookies.remove("userinfo", { path: "/" });
    toast.success("User logged out successfully", {
      onClose: () => navigate("/"),
      autoClose: 1000,
    });
  };

  if (!user) {
    return (
      <div className="container text-center mt-5">
        <h3>You are not logged in</h3>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <div className="text-center mb-3">
          <img
            src={imageLocatino || "/images/default-user.png"}
            alt="profile"
            className="rounded-circle mb-2"
            width="100"
            height="100"
          />
          <h4>{user.name}</h4>
          <p className="text-muted">{user.email}</p>
        </div>
        <hr />
        <div className="mb-2">
          <strong>Phone:</strong>
          <p>{user.phone}</p>
        </div>
        <div className="mb-3">
          <strong>User ID:</strong>
          <p>{user._id || "N/A"}</p>
        </div>
        <button
          className="btn btn-primary w-100 mt-2"
          onClick={() => navigate(`/updateuser/${user._id}`)}
        >
          Update Profile
        </button>
        <Link className="btn btn-success w-100 mt-2" to="/">
          Back to Home
        </Link>
        <button className="btn btn-warning w-100 mt-2" onClick={handleLogout}>
          Logout
        </button>
        <button
          className="btn btn-danger w-100 mt-2"
          onClick={() => navigate(`/deleteuserbyId/${user._id}`)}
        >
          Delete Account?
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
