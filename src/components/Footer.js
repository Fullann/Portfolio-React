import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Social from './Social.js';
import madeByLogo from "../Assets/image/fullannlogo/Group 3.svg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col  md="4"  className="footer-copywright">
          <img href="https://fullann.ch/" style={{width:"200px"}} src={madeByLogo} alt="brand" />
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
