import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Home";
import NewUserForm from "./NewUserForm";
import ShoppingCart from "./ShoppingCart";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/Signup" element={<NewUserForm />}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
        <Route path="/Logout" element={<NewUserForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
