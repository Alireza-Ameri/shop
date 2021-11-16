import React from "react";
import "./showproduct.css";

import products from "../../Products";

import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";

const Product = ({ match }) => {
  const product = products.find((item) => {
    return item.id === match.params.id;
  });

  return (
    <div>
      <Link to="/" className="back">
        بازگشت به خانه
      </Link>

      <Row>
        <Col md={6}>
          <Image className="image" src={product.image} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item className="name">{product.price}$</ListGroup.Item>
            <ListGroup.Item className="description">
              {product.discription}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <Button> افزودن به سبد خرید</Button>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
