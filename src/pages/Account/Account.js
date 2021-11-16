import React from "react";
import "./Account.css";

import { Button, Form, Image } from "react-bootstrap";

const Account = () => {
  return (
    <div className="container-sign">
      <div className="account-icon">
        <Image className="image-sign" src="/image/account.jpg" />
        <span className="title-sign">SIGN IN</span>
      </div>

      <Form className="form">
        <Form.Group className="mb-3 w-75 p-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 w-75 p-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    </div>
  );
};

export default Account;
