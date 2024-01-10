import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows,FaLinux } from "react-icons/fa";
import { SiMacos } from "react-icons/si";

function OsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
    </Row>
  );
}

export default OsStack;
