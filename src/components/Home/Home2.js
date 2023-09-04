import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image/profile/about.png";
import Tilt from "react-parallax-tilt";
import { withTranslation } from 'react-i18next';
import Social from '../Social.js';

function Home2({ t }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textTransform: "uppercase" }}>
            {t('home.myself.introTitle')}
            </h1>
            <p className="home-about-body">
              {t('home.myself.intro')}
              <br />
              <br />{t('home.myself.code')}
              <i>
                <b className="purple"> C#, Javascript, PHP. </b>
              </i>
              <br />
              <br />{t('home.myself.etml')}
              <br />{t('home.myself.heig')}
              <br />
              <br />{t('home.myself.github')}
              <b className="purple">Github</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t('multiple.follow')}</h1>
           <Social></Social>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default withTranslation(['translation', 'common'])(Home2);
