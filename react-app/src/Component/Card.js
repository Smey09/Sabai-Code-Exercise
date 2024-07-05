import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <Card style={{ width: "18rem", position: "relative" }}>
      <Card.Body>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "red",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Sale 50%
        </div>
        <Card.Img
          variant="top"
          src="assets/products/products.jpg"
          style={{ marginBottom: "10px" }}
        />
        <Card.Text style={{ color: "grey", fontSize: "14px" }}>
          HealthCare
        </Card.Text>
        <Card.Title style={{ fontSize: "18px", fontWeight: "bold" }}>
          Sarasoft AG
        </Card.Title>
        <Row>
          <Col>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>$14.99</span>{" "}
            <span style={{ textDecoration: "line-through", color: "grey" }}>
              $20.99
            </span>
          </Col>
        </Row>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <FaStar color="orange" />
          <FaStar color="orange" />
          <FaStar color="orange" />
          <FaStar color="orange" />
          <FaRegStar color="orange" />
        </div>
        <Button
          variant="light"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            borderRadius: "50%",
          }}
        >
          <FaShoppingCart />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
