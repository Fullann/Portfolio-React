import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus
 } from "react-icons/cg";
import {
  DiJavascript1,
} from "react-icons/di";
import {
  SiPhp,
  SiCsharp,
} from "react-icons/si";

function LanguageStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
    </Row>
  );
}

export default LanguageStack;
