import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { numberFormat } from "../helpers";

const product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.img}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="div">
        <Rating stars={product.rating} reviews={product.numReviews}></Rating>
      </Card.Text>
      <Card.Text as="h4">{numberFormat(product.price)}</Card.Text>
    </Card>
  );
};

export default product;
