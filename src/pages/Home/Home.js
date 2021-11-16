import React from "react";
import "./Home.css";

import { Col } from "react-bootstrap";
import Product from "../../components/Product/Product";

import products from "../../Products";

const Home = () => {
  return (
    <div>
      <h2 className="title">محصولات</h2>

      <div className="main">
        {products.map((item) => {
          return (
            <Col key={item.id}>
              <Product product={item} />
            </Col>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
