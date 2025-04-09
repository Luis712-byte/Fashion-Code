import React from "react";
import { useFilters } from "../hooks/useFilters.js";
import { Products } from "../Pages/Productos.jsx";
import products from "../mocks/products.json";
import { CartProvider } from "../context/cart.jsx";
import NavBar from "../Pages/Header.jsx";
import View from "./Vista-filter.jsx";
import { IonIcon } from '@ionic/react';


const Producto = () => {
  // const { filterProducts } = useFilters();

  // const filteredProducts = filterProducts(products);

  return (
    < div className="View-Product" >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <View />
          </div>
          <div className="col-lg-9">
            <CartProvider>
              <Products />
            </CartProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
