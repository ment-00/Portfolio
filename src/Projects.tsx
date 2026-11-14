
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

export default function Projects() {

    const projects = [
        {
            title: "Student Management System",
            description: "A system designed to manage student information and records.",
            technologies: ["React", "TypeScript", "Bootstrap"]
        },
        {
            title: "Database Management Project",
            description: "A database application for organizing and managing records.",
            technologies: ["Java", "MySQL"]
        },
        {
            title: "Personal Portfolio Website",
            description: "A personal website showcasing my background, skills, and projects.",
            technologies: ["React", "Vite", "React-Bootstrap"]
        }
    ];

    return (
        <>
            <Navigation />

            <Container className="py-5">
                <h1 className="page-heading">My Projects</h1>

                <p className="text-muted mb-4">
                    Here are some of my academic and personal projects.
                </p>

                <Row className="g-4">
                    {projects.map((project, index) => (
                        <Col md={6} lg={4} key={index}>
                            <Card className="portfolio-card h-100">
                                <Card.Body>
                                    <Card.Title>
                                        {project.title}
                                    </Card.Title>

                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>

                                    <hr />

                                    <h6>Technologies Used:</h6>

                                    <div className="d-flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge bg="primary" key={tech}>
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
