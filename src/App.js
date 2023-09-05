import React, { useState, useEffect } from "react";
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
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
  .use(initReactI18next)
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
            follow: "me <b class='purple'>retouver</b> sur",
          },
          home: {
            Hello: "<b class='purple'>Bonjour</b>",
            MyName: "Mon nom est ",
            im: 'Je suis',
            listTranslate: ['Développeur', 'Designer', 'Programmeur'],
            workat: "J'ai <b class='purple'>travaillié</b> chez :",
            myself: {
              introTitle: "JE ME <b class='purple'>PRésente</b>",
              intro: "J'ai découvert l'<b class='purple'>informatique</b> lors d'un stage fait à 15ans et la création et la liberté que permet le <b class='purple'>developpent</b> informatique m'ont directement plu.<br><br>Je code en <b class='purple'>C#, Javascript, PHP</b> principalement.<br><br>Après 4 ans a l'ETML d'où je ressort avec un <b class='purple'>CFC et une matu pro</b><br><br>Je suis acctuelement entrain de passer mon <b class='purple'>bachelor en sécurité informatique</b> à l'HEIG-VD<br><br>J'ai fais différents projets lors de ma formation et en privé.<br>Certains sont disonible sur mon <b class='purple'>Github</b>",
            },
            recommandation: "Mes <b class='purple'>recommandations</b>",
            listRecommandation: [
              { name: 'Angelica Rosso', designation: 'Directrice Recherche et Developpement', src: 'Assets/image/entreprise/solmani/solmani_logo.png', linkedin: 'https://www.linkedin.com/in/angelicarosso/', content: 'Organisé, concencieux, ponctuel et professionnel, Monsieur Füllemann, nous a fait une bonne impression. Il s\u0027est aquitté des tâches confiées à notre entière satisfaction.' },
            ],
          },
          about:{
            titleMe:"Deux trois <b class='purple'>informations</b> sur moi",
            MyCard:"Je m'appelle <b class='purple'>Nathan Füllemann</b> et je vis à Lausanne en Suisse. <br><br>J'ai commencé l'informatique à <b class='purple'>l'ETML</b> et le fait que l'on soit totallement libre en developpement m'a tout de suite plu.<br>Je suis acctuellement à <b class='purple'>l'HEIG-VD</b> pour faire un <b class='purple'>bachelor en sécurité informatique</b>.<br><br>Sinon a part l'informatique j'aime faire du sport, faire de la photographie et faire de la musique...",
            languageUsed:"<b class='purple'>Les outils</b> que je métrise",
            logicielUsed:"<b class='purple'>Les logiciels</b> que j'utilise",
            pushDone:"Push fait sur <b class='purple'>Github</b>"
          },
          contact:{
            title:"Intéressé à <b class='purple'>travailler ensemble ?</b>"
          }

        }
      }
    },
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const [load, upadateLoad] = useState(true);

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
