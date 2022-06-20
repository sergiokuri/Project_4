import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Home";
import NewUserForm from "./NewUserForm";
import ShoppingCart from "./ShoppingCart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/NewUserForm" element={<NewUserForm />}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
