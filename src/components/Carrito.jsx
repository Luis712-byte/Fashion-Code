import { React } from "react";
import { NavBar } from "./Header.jsx";
import { CartProvider }  from "../context/cart.jsx";
import { Cart } from './Cart.jsx'



const CarroCompras  = () => {
    return(
        <div className="CarroCompras">
            <NavBar/>
            <CartProvider>
            <Cart/>
            </CartProvider>
        </div>
    );
};
export default CarroCompras