import React from "react";
import Home from "./components/Home";
import Productos from "./style/Vista-Producto.jsx";
import Login from "./components/Login";
import Contacto from "./components/Contacto";
import Panel from "./components/Panel";
import Carrito from "./components/Carrito";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentGateway from "./style/PaymentGateway";
import Pay from "./components/Pay";
import Account from "./components/Account.jsx";
import ProductDetail from "./components/Productdetail.jsx";
import { CartProvider } from "./context/cart.jsx";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Producto" element={<Productos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contacto" element={<Contacto />} />
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
