import React from "react";
import "./Components.css";
function Product({ prodetails }) {
  const { proimg, name, price, detail } = prodetails;

  return (
    <div className="product-card">
      <img src={proimg} alt={name} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{name}</h3>
        <p className="product-detail">{detail}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}
export default Product;
