import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { formatRupiah } from "../helpers";

const product = ({ product }) => {
  return (
    <div className="item-container">
      <div className="card2">
        <Link to={`/product/${product._id}`}>
          <Card.Img className="image" variant="top" src={product.img} />
        </Link>
        <Card.Body>
          <Link className="link-title" to={`/product/${product._id}`}>
            <Card.Title className="body-card">
              <strong>{product.title}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating stars={product.rating} reviews={product.numReviews} />
          </Card.Text>
          <Card.Text className="text">
            <strong>{formatRupiah(product.price)}</strong>
          </Card.Text>
          <Button>
            <i className="cart-fas fas fa-cart-arrow-down"></i>
          </Button>
        </Card.Body>
      </div>
    </div>
  );
};

export default product;
