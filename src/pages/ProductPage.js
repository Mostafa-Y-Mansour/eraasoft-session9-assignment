import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../services/api";

export default function ProductPage(props) {
  const [product, setProduct] = useState([]);

  const params = useParams();

  const [item, setItem] = useState(params.id);

  useEffect(() => {
    getProducts();
  }, [item]);

  const getProducts = async () => {
    try {
      let data = await getApi("https://dummyjson.com/", item, "products");
      setProduct(data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <div className="card">
      <img
        className="card-img-top"
        style={{ height: "500px", objectFit: "contain" }}
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h5 className="card-text">category: {product.category}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-number"> price: {product.price}$</p>
        <p className="card-number">
          {" "}
          discount: {product.discountPercentage}% off
        </p>

        <button
          onClick={() => {
            setItem(product.id - 1);
          }}
        >
          back
        </button>

        <button
          onClick={() => {
            setItem(product.id + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
