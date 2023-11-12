import React from "react";
import { Row, Col } from "react-bootstrap";
import Computer from "./Computer";
import { withTranslation } from 'react-i18next';

function ComputerUsed({ t }) {
    return (
        <Row>
            <Col xs={12} md={6}>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: t(`about.computerText`) }} />
                </blockquote>
            </Col>
            <Col xs={12} md={6}>
                <Computer />
            </Col>
        </Row>
    );
}

export default withTranslation(['translation', 'common'])(ComputerUsed);
