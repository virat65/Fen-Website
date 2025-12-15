import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const MyProfile = () => {
  const navigate = useNavigate();

  // Get user from cookie
  const userCookie = cookies.get("userinfo");
  const user = userCookie ? JSON.parse(userCookie) : null;
console.log(user,"usererrr")
const imageLocatino = `http://localhost:1111/images/${user?.photo}`
console.log(imageLocatino,"imageLocatino")
  // const handleLogout = () => {
  //   cookies.remove("userinfo", { path: "/" });

  //   toast.success("User logged out successfully", {
  //     autoClose: 1000,
  //     onClose: () => navigate("/login"),
  //   });
  // };
const handleLogout = () => {
  cookies.remove("userinfo", { path: "/" });
  toast.success("user logout successfully");
  toast.success("User logged out successfully", {
    onClose: () => navigate("/"),

    autoClose: 1000,
  });
};
  // If user not logged in
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

        <button className="btn btn-danger w-100" onClick={handleLogout}>
          Logout
        </button>
        <Link className="btn btn-success w-100 mt-2" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
