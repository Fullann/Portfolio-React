import React from "react";
import Card from "react-bootstrap/Card";
import { withTranslation } from 'react-i18next';

function AboutCard({t}) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <p dangerouslySetInnerHTML={{__html: t(`about.MyCard`) }} />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default withTranslation(['translation', 'common'])(AboutCard);
