import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { formatRupiah } from "../helpers";

const Product = ({ product }) => {
  return (
    <>
      <div className="item-container col-md-3 col-sm-6 justify-content-center">
        <div className="row">
          <div className="card2">
            <Link to={`/product/${product?._id}`}>
              <Card.Img className="image" variant="top" src={product?.img} />
            </Link>
            <Card.Body>
              <Link className="link-title" to={`/product/${product?._id}`}>
                <Card.Title className="body-card">
                  <strong>{product?.title}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating stars={product?.rating} reviews={product?.rating} />
              </Card.Text>
              <Card.Text className="text">
                <strong>{formatRupiah(product?.price)}</strong>
              </Card.Text>
              <Button variant="primary" className="button-1">
                <FontAwesomeIcon className="button-2" icon={faCartArrowDown} />
              </Button>
            </Card.Body>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
