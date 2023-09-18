/*import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { withTranslation } from 'react-i18next';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Particle from "../Particle";
import homeLogo from "../../Assets/image/profile/home-profile.png";
import emailjs from '@emailjs/browser';

function ContactForm({ t }) {
  let check = false;

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onToken = (e) => {
    check = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (check) {
      emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE, process.env.REACT_APP_MAIL_TEMPLATE, e.target, process.env.REACT_APP_MAIL_PUBLIC_KEY)

      setFormData({
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (

    <Container fluid className="" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header" style={{ position: 'relative' }}>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                <div>
                  <label className='custom-label' htmlFor="email">Email :</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-input"
                  />
                </div>

                <div>
                  <label className='custom-label' htmlFor="subject">Sujet :</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="custom-input"
                  />
                </div>
              </div>

              <div>
                <label className='custom-label' htmlFor="message">Message :</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="custom-textarea"
                />
              </div>

              <div>
                <HCaptcha
                  sitekey={process.env.REACT_APP_HCAPTCHA}
                  onVerify={onToken}
                  onExpire={() => onToken('')}
                  onError={(err) => {
                    onToken('');

                    console.error(err);
                  }}
                />
              </div>
              <button className='custom-button' type="submit">Envoyer</button>
            </form>
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
  );
}

export default withTranslation(['translation', 'common'])(ContactForm);*/
