import axios from "axios";
import React, { useEffect, useState } from "react";
import backendapi from "../backendRouting/userRouting";
import { useNavigate, useParams } from "react-router-dom";

const Userview = () => {
  const imageLocation = "http://localhost:1111/images";
  const { id } = useParams();
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getdata = async () => {
    try {
      const response = await axios.get(`${backendapi.finduserbyid.url}/${id}`);
      setUserdata(response.data.body);
      setLoading(false);
    } catch (err) {
      console.log(`Error in getdata: ${err}`);
      setError("Failed to fetch user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, [id]);

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Loading user data...
      </p>
    );
  if (error)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>
        {error}
      </p>
    );
  if (!userdata)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>No user found</p>
    );

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {userdata?.photo ? (
        <img
          src={`${imageLocation}/${userdata.photo}`}
          alt={userdata.name}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
      ) : (
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor: "#eee",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            fontSize: "1rem",
            color: "#888",
          }}
        >
          No Photo
        </div>
      )}
      <h2 style={{ marginBottom: "0.5rem", color: "#333" }}>
        {userdata?.name}
      </h2>
      <p style={{ margin: "0.3rem 0", fontWeight: "bold", color: "#555" }}>
        Email: <span style={{ fontWeight: "normal" }}>{userdata?.email}</span>
      </p>
      <p style={{ margin: "0.3rem 0", fontWeight: "bold", color: "#555" }}>
        Phone: <span style={{ fontWeight: "normal" }}>{userdata?.phone}</span>
      </p>
      <p style={{ margin: "0.3rem 0", fontWeight: "bold", color: "#555" }}>
        Role:{" "}
        <span style={{ fontWeight: "normal", textTransform: "capitalize" }}>
          {userdata?.role}
        </span>
      </p>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => navigate("/findallusers")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#6c757d",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Go Back
        </button>
        <button
          onClick={() => navigate(`/deleteuserbyId/${id}`)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#dc3545",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default Userview;
