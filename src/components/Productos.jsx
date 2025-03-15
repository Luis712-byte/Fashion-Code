import React from "react";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoEyeOutline, IoRepeatOutline, IoBagAddOutline, IoStar, IoStarOutline } from "react-icons/io5";
import ProductDay from "./ProductsDay";

export function Products({ products }) {
  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="showcase">
            <div className="showcase-banner">
              <img src={product.image} alt={product.title} className="product-img default" />
              <img src={product.hoverImage} alt={product.title} className="product-img hover" />
              <p className="showcase-badge">{product.badge}</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <IoHeartOutline />
                </button>
                <button className="btn-action">
                  <IoEyeOutline />
                </button>
                <button className="btn-action">
                  <IoRepeatOutline />
                </button>
                <button className="btn-action">
                  <IoBagAddOutline />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">{product.category}</a>
              <a href="#">
                <h3 className="showcase-title">{product.title}</h3>
              </a>
              <div className="showcase-rating">
                {[...Array(5)].map((_, i) => (
                  <React.Fragment key={i}>
                    {i < product.rating ? <IoStar /> : <IoStarOutline />}
                  </React.Fragment>
                ))}
              </div>
              <div className="price-box">
                <p className="price">${product.price}</p>
                <del>${product.originalPrice}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductDay />
    </div>
  );
}