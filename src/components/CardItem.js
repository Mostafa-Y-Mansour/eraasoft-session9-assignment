import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardItem(props) {
  const { product } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        style={{ height: "300px", objectFit: "cover" }}
        src={product.images[product.images.length - 1]}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-number"> price: {product.price}$</p>
        <Link to={`product/${product.id}`} className="btn btn-primary">
          MORE
        </Link>
      </div>
    </div>
  );
}
