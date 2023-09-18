import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { withTranslation } from 'react-i18next';


function Projects({ t }) {
  const ALL = 'all';
  const [projects] = useState(t('projects.liste', { returnObjects: true }));
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

  const allProject = projectsByTechs.map((project) => {
    const importedImage = importedImages.find((img) => img.id === project.id);
    return {
      ...project,
      image: importedImage ? importedImage.image : null,
    };
  });

  const professionalProjects = allProject.filter((project) => project.category === 'professionnel');
  const personalProjects = allProject.filter((project) => project.category === 'personnel');
  const ecoleProjects = allProject.filter((project) => project.category === 'school');


  return (
    <Container fluid className="containerproject">
      <Particle />
      <Container className="home-content border-r border-l border-dashed border-gray-700 py-6 mx-auto">
        <Row className="text-center">
          <Col >
            <h2 className="text-2xl tracking-tight font-extrabold text-gray-200" dangerouslySetInnerHTML={{ __html: t('projects.title') }} />
            <p className="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400" dangerouslySetInnerHTML={{ __html: t('projects.desc') }} />
          </Col>
        </Row>

        <Row className="px-4">
          <Col className="home-header text-center">
            <div className="nav-container">
              <nav style={{ position: 'relative' }}>
                <Button style={{ marginRight: '10px', marginTop: '10px' }}
                  key={ALL}
                  onClick={() => setCurrentTech(ALL)}
                  className={`nav-button ${currentTech === ALL ? 'nav-active' : ''}`}
                >
                  {t('projects.all')}
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

        <div>
          <h2 className="titleProjet" dangerouslySetInnerHTML={{ __html: t('projects.titlePro') }}/>
          <Row>
            {professionalProjects.map((project) => (
              <Col
                key={project.id}
                lg={4}
                md={6}
                sm={12}
                style={{ marginTop: "30px" }}
                className="hover:-rotate-12"
              >
                <ProjectCard
                  id={project.id}
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
          <h2 className="titleProjet" dangerouslySetInnerHTML={{ __html: t('projects.titlePerso') }} />
          <Row>
            {personalProjects.map((project) => (
              <Col
                key={project.id}
                lg={4}
                md={6}
                sm={12}
                style={{ marginTop: "30px" }}
                className="hover:-rotate-12"
              >
                <ProjectCard
                  id={project.id}
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
          <h2 className="titleProjet" dangerouslySetInnerHTML={{ __html: t('projects.titleSchool') }}/>
          <Row>
            {ecoleProjects.map((project) => (
              <Col
                key={project.id}
                lg={4}
                md={6}
                sm={12}
                style={{ marginTop: "30px" }}
                className="hover:-rotate-12"
              >
                <ProjectCard
                  id={project.id}
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
        </div>
      </Container>
    </Container>
  );
}

export default withTranslation(['translation', 'common'])(Projects);
