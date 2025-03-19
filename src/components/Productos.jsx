import React, { useEffect, useState } from "react";
import { IoHeartOutline, IoEyeOutline, IoRepeatOutline, IoBagAddOutline, IoStar, IoStarOutline } from "react-icons/io5";
import api from '../api.jsx';
import ProductDay from "./ProductsDay";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("📤 Enviando petición...");
        const response = await api.get("/productos");
        if (response.status === 200) {
          console.log("✅ API Respondió:", response.data);
          setProducts(response.data);
        } else {
          console.error("⚠️ Respuesta inesperada:", response);
        }
      } catch (error) {
        console.error("🚨 Error en la petición:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.X9FILE_ID} className="showcase">
            <div className="showcase-banner">
              <img src={product.X9FILE_IMAGE1} alt={product.X9FILE_NAME} className="product-img default" />
              <img src={product.X9FILE_IMAGE2} alt={product.title} className="product-img hover" />
              <div className="showcase-actions">
                <button className="btn-action"><IoHeartOutline /></button>
                <button className="btn-action"><IoEyeOutline /></button>
                <button className="btn-action"><IoRepeatOutline /></button>
                <button className="btn-action"><IoBagAddOutline /></button>
              </div>
            </div>
            <div className="showcase-content">
              <h3 className="showcase-title">{product.X9FILE_NAME}</h3>
              <p className="showcase-category">{product.X9FILE_TYPE}</p>
              <div className="showcase-rating">
                {[...Array(5)].map((_, i) => (
                  <React.Fragment key={i}>
                    {i < product.X9FILE_RATING ? <IoStar /> : <IoStarOutline />}
                  </React.Fragment>
                ))}
              </div>
              <div className="price-box">
                <p className="price">${product.X9FILE_PRICE}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
