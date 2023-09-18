import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/image/profile/logo.png";
import Toolstack from "./Toolstack";
import LanguageStack from "./LanguageStack";
import { withTranslation } from 'react-i18next';

function About({ t }) {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <p dangerouslySetInnerHTML={{ __html: t('about.titleMe') }} />
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt><img src={laptopImg} alt="about" className="img-fluid" /></Tilt>

          </Col>
        </Row>
        <h1 className="project-heading">
          <p dangerouslySetInnerHTML={{ __html: t('about.languageUsed') }} />
        </h1>

        <LanguageStack />
        <h1 className="project-heading">
          <p dangerouslySetInnerHTML={{ __html: t('about.outilsUsed') }} />
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <p dangerouslySetInnerHTML={{ __html: t('about.logicielUsed') }} />
        </h1>
        <Toolstack />
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          <p dangerouslySetInnerHTML={{ __html: t('about.pushDone') }} />
        </h1>
        <Github />
      </Container>
    </Container>
  );
}

export default withTranslation(['translation', 'common'])(About);
