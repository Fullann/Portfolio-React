import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectDetails({ t }) {
    // Récupérez l'ID du projet à partir des paramètres d'URL
    let { id } = useParams();
    const [projects] = useState(t('projects.liste', { returnObjects: true }));
    // Recherchez le projet correspondant dans votre liste de projets (supposons que vous avez une liste de projets)
    const project = projects.find((p) => p.id.toString() === id);

    const [image, setImage] = useState(null);


    useEffect(() => {
        import(`../../projects/img/${project.imgname}`) // Charge dynamiquement l'image
            .then((imageModule) => {
                // L'image est maintenant disponible dans imageModule.default
                setImage(imageModule.default);
            })
            .catch((error) => {
                console.error('Erreur de chargement de l\'image :', error);
            });
    },);


    if (!project) {
        return <div>Projet introuvable</div>;
    }

    return (
        <section>
            <Container fluid className="containerproject">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col>
                            <h1>{project.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            {image && (
                                <img src={image} alt={project.title} className="img-fluid project-card-view" />
                            )}
                        </Col>
                        <Col md={6}>
                            <h3 dangerouslySetInnerHTML={{ __html: t('projects.techno') }} />
                            <ul>
                                {project.tech.join(', ')}
                            </ul>
                            <div style={{ position: 'relative' }}>
                                {project.github && (
                                    <Button variant="primary" href={project.github} target="_blank">
                                        <BsGithub /> &nbsp;
                                        GitHub
                                    </Button>
                                )}
                                {"\n"}
                                {"\n"}

                                {project.demoLink && (
                                    <Button
                                        variant="primary"
                                        href={project.demoLink}
                                        target="_blank"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        <CgWebsite /> &nbsp;
                                        {"Demo"}
                                    </Button>
                                )}
                            </div>

                        </Col>
                    </Row>
                    <Row style={{marginTop:'40px'}}>
                        <Col>
                            <p style={{ color: 'white',position:'relative' }} dangerouslySetInnerHTML={{ __html: project.text }} />
                        </Col>
                    </Row>

                </Container>
            </Container>
        </section>
    );
};

export default withTranslation(['translation', 'common'])(ProjectDetails);