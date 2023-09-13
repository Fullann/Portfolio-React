import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const ALL = 'all';

function Projects() {
  const projectsJson = require('../../projects/projects.json');
  const [projects] = useState(projectsJson);
  const [currentTech, setCurrentTech] = useState(ALL);
  const [importedImages, setImportedImages] = useState([]);

  // Filtrer les projets en fonction de la technologie sélectionnée
  const projectsByTechs = currentTech === ALL ? projects : projects.filter((project) => project.tech.includes(currentTech));

  useEffect(() => {
    // Fonction pour importer dynamiquement les images
    const importImages = async () => {
      const importedImagesArray = await Promise.all(
        projects.map(async (item) => {
          try {
            const imageModule = await import(`../../projects/img/${item['imgname']}`);
            return {
              id: item.id,
              title: item.title,
              tech: item.tech,
              image: imageModule.default,
              github: item.github,
              demoLink: item.demoLink,
              desc: item.desc,
              text: item.text,
            };
          } catch (error) {
            console.error(`Erreur lors de l'import de l'image ${item.src}: ${error}`);
            return null;
          }
        })
      );
      // Filtrer les images importées avec succès
      setImportedImages(importedImagesArray.filter((item) => item !== null));
    };

    importImages();
  }, [projects]);

  // projectsByTechs doit être combiné avec les images importées
  const combinedProjects = projectsByTechs.map((project) => {
    const importedImage = importedImages.find((img) => img.id === project.id);
    return {
      ...project,
      image: importedImage ? importedImage.image : null,
    };
  });

  return (
    <Container fluid className="containerproject">
      <Particle />
      <Container className="home-content border-r border-l border-dashed border-gray-700 py-6 mx-auto">
        <Row className="text-center">
          <Col >
            <h2 className="text-2xl tracking-tight font-extrabold text-gray-200">projets - Votre Nom</h2>
            <p className="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">Description de vos projets.</p>
          </Col>
        </Row>

        <Row className="px-4">
          <Col className="home-header text-center" style={{ position: 'relative' }} >
            <div className="nav-container">
              <nav>
                <Button style={{ marginRight: '10px', marginTop: '10px' }}
                  key={ALL}
                  onClick={() => setCurrentTech(ALL)}
                  className={`nav-button ${currentTech === ALL ? 'nav-active' : ''}`}
                >
                  {ALL}
                </Button>
                {Array.from(new Set(projects.flatMap((project) => project.tech))).map((tech) => (
                  <Button style={{ marginRight: '10px', marginTop: '10px' }}
                    variant="primary"
                    key={tech}
                    onClick={() => setCurrentTech(tech)}
                    className={`nav-button ${tech === currentTech ? 'nav-active' : ''}`}
                  >
                    {tech}
                  </Button>
                ))}
              </nav>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          {combinedProjects.map((project) => (
            <Col key={project.id} lg={4} md={6} sm={12} className="hover:-rotate-12">
              <ProjectCard
                imgPath={project.image}
                title={project.title}
                tech={project.tech.join(', ')}
                description={project.desc}
                ghLink={project.github !== "" ? project.github : null}
                demoLink={project.demoLink !== "" ? project.demoLink : null}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
