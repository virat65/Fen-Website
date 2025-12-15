import axios from "axios";
import React, { useEffect } from "react";
import backendapi from "../backendRouting/userRouting";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import cookie from "js-cookie";

const Userdelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Get user cookie
  const getusercookie = cookie.get("userinfo");

  // Redirect to login if cookie is missing or invalid
  useEffect(() => {
    if (!getusercookie) {
      navigate("/login");
    } else {
      try {
        JSON.parse(getusercookie);
      } catch (err) {
        navigate("/login");
      }
    }
  }, [getusercookie, navigate]);

  const handleCancel = () => {
    navigate("/findallusers");
  };

  const handleDelete = async () => {
    try {
      const deleteduser = await axios.delete(
        `${backendapi.deleteuserbyid.url}/${id}`
      );
      toast.success(deleteduser.data.message);

      // Check if the deleted user is the logged-in user
      const loggedUser = getusercookie ? JSON.parse(getusercookie) : null;
      if (loggedUser && loggedUser._id === id) {
        cookie.remove("userinfo", { path: "/" });
        navigate("/login"); // redirect immediately
        return;
      }

      // Otherwise, redirect to users list
      setTimeout(() => {
        navigate("/findallusers");
      }, 1000);
    } catch (error) {
      console.error(`Error in handleDelete: ${error}`);
      toast.error("Failed to delete user");
    }
  };

  // Don't render if cookie is missing
  if (!getusercookie) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px 40px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#dc3545" }}>
          Are you sure you want to delete this user?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button
            onClick={handleDelete}
            style={{
              padding: "10px 0",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Yes, Delete
          </button>
          <button
            onClick={handleCancel}
            style={{
              padding: "10px 0",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userdelete;
