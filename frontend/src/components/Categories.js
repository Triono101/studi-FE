import { categories } from "../helpers/data";
import { Link } from "react-router-dom";
import "../App.css";

const Categories = () => {
  return (
    <div className="container my-3">
      <h4 className="display-6 fw-bolder text-center">Featured Products</h4>
      <hr />
      <div className="d-flex justify-content-center">
        {categories.map((product) => (
          <Link to={`/products/${product.cat}`}>
            <button
              className="buttons1 btn btn-outline-dark me-2"
              product={product}
              key={product.id}
            >
              {product.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
