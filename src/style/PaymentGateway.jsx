import React from "react";
import { Link } from "react-router-dom";
import ContactInformation from "../Pages/ContactInformation";
import { CartProvider } from "../context/cart";
import { CartIcon } from "../Pages/Icons";

function PaymentGatewayView() {
  return (
    <div className="titulo-pasarela">
      <div className="Title-container">
        <Link to="/Carrito">
          <button>
            {" "}
            <CartIcon />
          </button>
        </Link>
      </div>
      <CartProvider>
        <ContactInformation />
      </CartProvider>
    </div>
  );
}

export default PaymentGatewayView;
