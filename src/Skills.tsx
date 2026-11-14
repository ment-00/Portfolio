
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

export default function Skills() {
    return (
        <>
            <Navigation />

            <Container className="py-5">
                <h1 className="page-heading">My Skills</h1>

                <p className="text-muted mb-4">
                    Technologies and abilities I am currently developing.
                </p>

                <Row className="g-4">
                    <Col md={6}>
                        <Card className="portfolio-card h-100">
                            <Card.Body>
                                <Card.Title>Programming Languages</Card.Title>

                                <div className="d-flex flex-wrap gap-2 mt-3">
                                    <Badge bg="primary">Java</Badge>
                                    <Badge bg="primary">JavaScript</Badge>
                                    <Badge bg="primary">TypeScript</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="portfolio-card h-100">
                            <Card.Body>
                                <Card.Title>Web Development</Card.Title>

                                <div className="d-flex flex-wrap gap-2 mt-3">
                                    <Badge bg="success">HTML</Badge>
                                    <Badge bg="success">CSS</Badge>
                                    <Badge bg="success">React</Badge>
                                    <Badge bg="success">Vite</Badge>
                                    <Badge bg="success">Bootstrap</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="portfolio-card h-100">
                            <Card.Body>
                                <Card.Title>Database and Tools</Card.Title>

                                <div className="d-flex flex-wrap gap-2 mt-3">
                                    <Badge bg="info">MySQL</Badge>
                                    <Badge bg="info">SQLite</Badge>
                                    <Badge bg="info">VS Code</Badge>
                                    <Badge bg="info">Git</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="portfolio-card h-100">
                            <Card.Body>
                                <Card.Title>Personal Skills</Card.Title>

                                <div className="d-flex flex-wrap gap-2 mt-3">
                                    <Badge bg="secondary">Problem Solving</Badge>
                                    <Badge bg="secondary">Teamwork</Badge>
                                    <Badge bg="secondary">Communication</Badge>
                                    <Badge bg="secondary">Time Management</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
