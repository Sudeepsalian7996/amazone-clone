import { useState } from "react";
import Header from "./components/common/Header";
import Home from "./components/Home/Home";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/Signup";
import ProductDetail from "./components/cart/ProductDetail";
import "./App.css";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import CartItems from "./components/cart/CartItems";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/getproduct-detail/:id" element={<ProductDetail />} />
        <Route path="/cart-items" element={<CartItems />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
