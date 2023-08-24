import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import config from '../config.js';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn,FaCodepen } from "react-icons/fa";

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
          <ul className="footer-icons">
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
  );
}

export default Footer;
