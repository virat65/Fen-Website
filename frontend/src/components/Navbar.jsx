import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState(false);
 const getusercookie = cookies.get("userinfo");
 let availableCookie = null;
 if (getusercookie) {
   try {
     availableCookie = JSON.parse(getusercookie);
   } catch (err) {
     console.error("Invalid cookie data", err);
   }
 }
  const handlLogout = () => {
    cookies.remove("userinfo", { path: "/" });
    toast.success("user logout successfully");
    toast.success("User logged out successfully", {
      onClose: () => navigate("/"),

      autoClose: 1000,
    });
  };

  console.log(availableCookie, "availableCookie");
  return (
    <div className="hero_area">
      <div className="bg-box">
        <img src="/images/hero-bg.jpg" alt="background" />
      </div>

      {/* Header section */}
      {}
      <header className="header_section">
        <div className="container-fluid ">
          <nav className="navbar navbar-expand-lg custom_nav-container mx-5">
            <a className="navbar-brand" href="/">
              <span>Feane</span>
            </a>

            <h2
              style={{ color: "white", marginLeft: "20px", marginTop: "5px" }}
              className="mx-md-5"
            >
              Welcome{" "}
              <a
                href="
              "
                style={{ color: "orange" }}
              >
                {availableCookie?.name || "user"}
              </a>
            </h2>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/menu">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/book">
                    Book Table
                  </a>
                </li>
              </ul>

              <div className="user_option">
                {/* User Icon + Dropdown */}
                <div className="user_link">
                  <i
                    className="fa fa-user cursor-pointer "
                    aria-hidden="true"
                    onClick={() => setOptions(!options)}
                  ></i>

                  {options && (
                    <div className="user-dropdown">
                      <ul>
                        {(availableCookie?.name && (
                          <>
                            <li>
                              <Link to="/myprofile  ">Profile</Link>
                            </li>
                            <li>
                              <Link to="/orders">My Orders</Link>
                            </li>
                          </>
                        )) ||
                          ""}

                        {availableCookie?.role === "admin" && (
                          <>
                            <li>
                              <Link to="/findallusers">ALL Users</Link>
                            </li>

                            <li>
                              <Link to="/addproduct">Add Product</Link>
                            </li>
                          </>
                        )}
                        {availableCookie?.name ? (
                          <li
                            onClick={handlLogout}
                            style={{
                              border: "none",

                              backgroundColor: "white",
                              color: "black",
                              cursor: "pointer",
                              // marginBottom:"5px"
                            }}
                            className="btn bg-danger w-100"
                          >
                            logout
                          </li>
                        ) : (
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                <a className="cart_link" href="#">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 456.029 456.029"
                  >
                    <g>
                      <g>
                        <path
                          d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                        />
                      </g>
                    </g>

                    <g>
                      <g>
                        <path
                          d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                          C457.728,97.71,450.56,86.958,439.296,84.91z"
                        />
                      </g>
                    </g>

                    <g>
                      <g>
                        <path
                          d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>

                <form className="form-inline">
                  <button
                    className="btn my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>

                <a href="#" className="order_online">
                  Order Online
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Slider section */}

      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                        temporibus sapiente ad mollitia laborum quam quisquam
                        esse error unde.
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi...
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi...
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
