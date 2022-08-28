import axios from "axios";
import Product from "./Product";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          cat
            ? `http://127.0.0.1:5000/api/products?category=${cat}`
            : "http://127.0.0.1:5000/api/products"
        );
        setProducts(res.data);
        setLoading(false);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((product) =>
          Object.entries(filters).every(([key, value]) =>
            product[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "terbaru") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "tertinggi") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <>
      <div>
        <div className="row">
          {cat
            ? filterProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))
            : products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
        </div>
      </div>
      <span className="row justify-content-center">
        {loading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.05"
            width="96"
            visible={true}
          />
        ) : (
          <></>
        )}
      </span>
    </>
  );
};

export default Products;
