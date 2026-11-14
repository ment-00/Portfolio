
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import Navigation from "./Navigation";

export default function Home() {
    return (
        <>
            <Navigation />

            <Container className="py-5">
                <Row className="align-items-center g-4">
                    <Col md={7}>
                        <Badge bg="primary" className="mb-3">
                            MY PORTFOLIO
                        </Badge>

                        <h1 className="display-4 fw-bold">
                            Hello, I'm <span className="text-primary">Your Name</span>
                        </h1>

                        <h4 className="text-secondary mb-3">
                            Third-Year Information Technology Student
                        </h4>

                        <p className="lead">
                            I am an aspiring IT professional interested in
                            programming, web development, and technology.
                            I enjoy learning new skills and creating projects
                            that improve my knowledge.
                        </p>

                        <Button as={Link} to="/projects" variant="primary" className="me-2">
                            View My Projects
                        </Button>

                        <Button as={Link} to="/contact" variant="outline-dark">
                            Contact Me
                        </Button>
                    </Col>

                    <Col md={5}>
                        <Card className="profile-card text-center p-4">
                           <img
                            src="/profile.jpg"
                            alt="My Profile"
                            className="profile-photo"
                            />

                            <Card.Body>
                                <Card.Title>Your Name</Card.Title>
                                <Card.Text className="text-muted">
                                    BS Information Technology
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5 g-4">
                    <Col md={4}>
                        <Card className="portfolio-card h-100">
                            <Card.Body>
                                <Card.Title>Who I Am</Card.Title>
                                <Card.Text>
                                    An IT student passionate about learning
                                    programming and technology.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="portfolio-card h-100">
                            <Card.Body>
                                <Card.Title>What I Do</Card.Title>
                                <Card.Text>
                                    I explore web development, software
                                    development, and database management.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="portfolio-card h-100">
                            <Card.Body>
                                <Card.Title>My Goal</Card.Title>
                                <Card.Text>
                                    To continuously improve my technical
                                    skills and become a skilled IT professional.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
