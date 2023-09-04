import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez traiter les données du formulaire ici, par exemple, en les envoyant à un serveur.
    console.log(formData);
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Prénom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Nom :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject">Sujet :</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <HCaptcha
            sitekey="VOTRE_SITE_KEY_HCaptcha"
            onVerify={(token) => console.log(token)} // Gérez la vérification ici
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
