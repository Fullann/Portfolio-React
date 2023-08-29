import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Jali Bot"
              description="Ce projet a été réaliser dans le cadre du confinment en 2020. En recherche de chose a faire je me suis pencher sur les bot discord car a cause du confinemnt j était assez souvent sur cette application Malhueureusement ce projet n'est pas fini pour le moment"
              ghLink="https://github.com/Fullann/JALI-BOT"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Jali Site"
              description="Ce projet a été réaliser dans le cadre de la suite de mon premier gros projet en infomatique. Jali mon bot discord de managment de server.Malhueureusement ce projet n'est pas fini pour le moment ainsi que le bot Jali"
              ghLink="https://github.com/Fullann/JALI-SITE"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PortfolioV1"
              description="Ce projet a été réaliser dans le cadre de la fin de l'ETML et de la recherche d'emplois.Ce portfolio est complétement customisable. Tous les adones (i18n,blog,project,review,cv,connexion, etc) peuvent etre actionner ou non"
              ghLink="https://github.com/Fullann/PortfolioV1/"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SerialPortFramesSender"
              description="Ce projet a été réaliser dans le cadre de tests sur des signaux d'autoroute.Je devais en comprendre le fonctionnement et le système d'envoie et de reception de trame."
              ghLink="https://github.com/Fullann/SerialPortFramesSender"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TodoList"
              description="Ce projet a été réaliser dans le cadre de mon organisation personnel😅. Grace a ce projet je ne perd pas le file des me tache et obligation dans ma vie personnel. Grace a cette todolist on peut créer plusieur tableau,plusieurs tâche ainsi que le customiser complétement."
              ghLink="https://github.com/Fullann/TodoList"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Yuki-Decrypt"
              description="Ce projet a été réaliser dans le cadre d'un projet de cybersécurité a l'ETML. Nous avions le choix entre une multitude de projet qui touche de loin ou de pres à la sécurité informatique.Pour ma part le craquage de mot de passe ma toujous plus donc je me suis întéressé au différent type de hashage (ici 3 : MD5/SHA1/SHA256) avec un système de brut force et en parallèle sur un autre tread un craquage avec plusieur rainbow table des mot de passe les plus utiliser en 2021."
              ghLink="https://github.com/Fullann/YUKI-Decrypt"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
