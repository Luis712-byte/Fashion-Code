import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Panel from "./style/Panel";
import Carrito from "./components/Carrito";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentGateway from "./style/PaymentGateway";
import Pay from "./Formularios/Pay";
import Account from "./components/Account";
import ProductDetail from "./components/Productdetail.jsx";
import { CartProvider } from "./context/cart.jsx";
import './tailwind-output.css';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Panel" element={<Panel />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Pago" element={<PaymentGateway />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
