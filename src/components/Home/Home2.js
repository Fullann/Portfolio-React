import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import config from '../../config.js';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaCodepen } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textTransform: "uppercase" }}>
              JE ME <span className="purple"> PRésente </span>
            </h1>
            <p className="home-about-body">
              J'ai découvert l'informatique lors d'un stage. La création et la liberté que permet le developpent informatique m'ont directement plus.
              <br />
              <br />Je code en
              <i>
                <b className="purple"> C#, Javascript and PHP. </b>
              </i>
              <br />
              <br />
              Après 4 ans a l'ETML d'où je ressort avec un <b className="purple">CFC et une matu pro</b> &nbsp;
              Je suis acctuelement entrain de passer mon <b className="purple">bachelor</b> à l'HEIG-VD
              <br />
              <br />
              J'ai fais différents projets lors de ma formation et en privé.Ils sont disonible sur mon <b className="purple">Github</b>
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
            <h1>Suivez moi </h1>
            <p>
              Vous pouvez me<span className="purple"> trouver </span>sur
            </p>
            <ul className="home-about-social-links">
              {config.social.github !== "" && (
                <li className="social-icons">
                  <a
                    href={config.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              )}
              {config.social.twitter !== "" && (
                <li className="social-icons">
                  <a
                    href={config.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
              )}
              {config.social.linkedin !== "" && (
                <li className="social-icons">
                  <a
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
              {config.social.instagram !== "" && (
                <li className="social-icons">
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              )}
              {config.social.codepen !== "" && (
                <li className="social-icons">
                  <a
                    href={config.social.codepen}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaCodepen />
                  </a>
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
