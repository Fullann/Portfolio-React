import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Social from './Social.js';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Nathan Füllemann</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <Social></Social>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
