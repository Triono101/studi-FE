import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://127.0.0.1:5000/api/products");
      setProducts(data);
    };
    fetchProducts();
  });

  return (
    <>
      <h4>Popular Products</h4>
      <div className="item-container">
        {products.map((product) => (
          <p>
            <Product product={product} />
          </p>
        ))}
      </div>
    </>
  );
};

export default HomePage;
