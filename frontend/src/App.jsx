import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Book from "./pages/Book";
import Menu from "./pages/Menu";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import MyProfile from "./pages/Myprofile.jsx";
import Findalluser from "./pages/Findalluser.jsx";
import Userview from "./pages/userview.jsx";
import Userdelete from "./pages/Userdelete.jsx";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/menu" element={<Menu />} />
          </Route>{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/findallusers" element={<Findalluser />} />
          <Route path="/userview/:id" element={<Userview />} />
          <Route path="/deleteuserbyId/:id" element={<Userdelete />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
