import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import backendapi from "../backendRouting/userRouting";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Findalluser = () => {
  const imageLocation = `http://localhost:1111/images`;
  const navigate = useNavigate();
  const getusercookie = cookie.get("userinfo");
  const availableCookie = getusercookie ? JSON.parse(getusercookie) : null;

  const [usersinfo, setUsersinfo] = useState([]);
  const [search, setSearch] = useState("");

  const getallusers = async () => {
    try {
      const res = await axios.get(backendapi.findallusers.url, {
        headers: {
          Authorization: `Bearer ${availableCookie?.token}`,
        },
      });
      setUsersinfo(res.data.body);
    } catch (error) {
      console.log("Error in getallusers", error);
    }
  };

  const navigatedId = (id) => navigate(`/userview/${id}`);
  const userDelete = (id) => navigate(`/deleteuserbyId/${id}`);

  useEffect(() => {
    getallusers();
  }, []);

  // Filter users by name (case-insensitive)
  const filteredUsers = usersinfo.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div className="topdiv d-flex justify-content-around">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>All Users</h2>

        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 12px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>
        <Link
          className="btn btn-success  "
          style={{ width: "190px", height: "40px" }}
          to="/"
        >
          Back to Home
        </Link>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "600px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "#fff" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                S.no
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Name
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Email
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Role
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Photo
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                View
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={user._id || index}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {index + 1}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {user.name}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {user.email}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {user.role}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {user.photo ? (
                      <img
                        src={`${imageLocation}/${user.photo}`}
                        alt={user.name}
                        style={{ width: "50px", borderRadius: "5px" }}
                      />
                    ) : (
                      <span>No Photo</span>
                    )}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    <button
                      onClick={() => navigatedId(user._id)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    <button
                      onClick={() => userDelete(user._id)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "15px",
                    color: "#555",
                  }}
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Findalluser;
