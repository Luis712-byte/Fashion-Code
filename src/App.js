import React from "react";
import { Route, Routes } from "react-router-dom";
import './tailwind-output.css';
import { CartProvider } from "./context/cart.jsx";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Panel from "./style/Panel";
import Carrito from "./Pages/Carrito";
import PaymentGateway from "./style/PaymentGateway";
import Pay from "./Formularios/Pay";
import UserProfile from "./Formularios/UserProfile";
import ProductDetail from "./Pages/Productdetail.jsx";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Panel" element={<Panel />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Pago" element={<PaymentGateway />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/reset-password/:token" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
