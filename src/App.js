import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          home: {
            Hello: "Hi",
            MyName: "My name is",
            listTranslate: ['Développeur', 'Designer', 'Programmeur'],
            myself: {
              intro: "I discovered IT on a work placement. The creativity and freedom that computer development allows me was something I really enjoyed.",
              code: "I code in",
              etml: "",
              heig: "",
              github: ""
            },
            listRecommandation: [{ name: 'Angelica Rosso', designation: 'Directrice Recherche et Developpement', src: 'Assets/image/entreprise/solmani/solmani_logo.png', linkedin: 'https://www.linkedin.com/in/angelicarosso/', content: 'Organisé, concencieux, ponctuel et professionnel, Monsieur Füllemann, nous a fait une bonne impression. Il s\u0027est aquitté des tâches confiées à notre entière satisfaction.' },

            ],
          }
        }
      },
      fr: {
        translation: {
          multiple: {
            follow: 'Suivez moi sur',
          },
          home: {
            Hello: "Bonjour",
            MyName: "Mon nom est ",
            im: 'Je suis',
            listTranslate: ['Développeur', 'Designer', 'Programmeur'],
            workat: "J'ai travaillié chez :",
            myself: {
              introTitle: "JE ME PRésente",
              intro: "J'ai découvert l'informatique lors d'un stage. La création et la liberté que permet le developpent informatique m'ont directement plus.",
              code: "Je code en",
              etml: "Après 4 ans a l'ETML d'où je ressort avec un CFC et une matu pro",
              heig: "Je suis acctuelement entrain de passer mon bachelor en sécurité informatique à l'HEIG-VD",
              github: "J'ai fais différents projets lors de ma formation et en privé.Ils sont disonible sur mon "
            },
            recommandation: 'Mes recommandations :',
            listRecommandation: [
              { name: 'Angelica Rosso', designation: 'Directrice Recherche et Developpement', src: 'Assets/image/entreprise/solmani/solmani_logo.png', linkedin: 'https://www.linkedin.com/in/angelicarosso/', content: 'Organisé, concencieux, ponctuel et professionnel, Monsieur Füllemann, nous a fait une bonne impression. Il s\u0027est aquitté des tâches confiées à notre entière satisfaction.' },

            ],
          }

        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const [load, upadateLoad] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
