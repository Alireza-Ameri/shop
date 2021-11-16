import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="maincard">
      <Link to={`/products/${product.id}`}>
        <Card.Img className="img" src={product.image} />
      </Link>

      <Card.Body>
        <Link className="link" to={`/products/${product.id}`}>
          <Card.Title className="title">{product.name}</Card.Title>
        </Link>
      </Card.Body>

      <Card.Text className="price">{product.price}$</Card.Text>
    </Card>
  );
};

export default Product;
