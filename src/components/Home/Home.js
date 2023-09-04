import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/image/profile/home-profile.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import WorkAt from "../WorkAt";

import config from '../../config.js';
import { withTranslation } from 'react-i18next';

function Home({ t }) {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('home.Hello')}
              </h1>
              <h1 className="heading-name">
                {t('home.MyName')}
                <strong className="main-name">  {config.name}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", display: 'flex' }}>
                <h1 className="home-header" style={{marginRight:'10px'}}>{t('home.im')}</h1><Type listTitle={t('home.listTranslate', { returnObjects: true })} />
              </div>
              <div className="heading-workat">
                {t('home.workat')}
                <WorkAt WorkAtlist={config.workedAt.meta} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default withTranslation(['translation', 'common'])(Home);
