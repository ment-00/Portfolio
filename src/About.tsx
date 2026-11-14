
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Navigation from "./Navigation";

export default function About() {
    return (
        <>
            <Navigation />

            <Container className="py-5">
                <h1 className="page-heading">About Me</h1>
                <p className="text-muted mb-4">
                    My background, education, and qualifications.
                </p>

                <Row className="g-4">
                    <Col md={7}>
                        <Card className="portfolio-card mb-4">
                            <Card.Body>
                                <Card.Title>Personal Profile</Card.Title>
                                <Card.Text>
                                    I am a first-year Bachelor of Science
                                    in Information Technology student.
                                    I am interested in programming, web
                                    development, and learning how technology
                                    can solve everyday problems.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="portfolio-card">
                            <Card.Body>
                                <Card.Title>Educational Background</Card.Title>

                                <h6 className="mt-3 mb-1">
                                    Bachelor of Science in Information Technology
                                </h6>
                                <p className="text-muted mb-1">
                                    University of San Agustin
                                </p>
                                <Badge bg="primary">Currently Studying</Badge>

                                <hr />

                                <h6>Senior High School</h6>
                                <p className="text-muted mb-0">
                                    Your Previous School
                                </p>
                                <small className="text-muted">
                                    Year Graduated: XXXX
                                </small>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={5}>
                        <Card className="portfolio-card mb-4">
                            <Card.Body>
                                <Card.Title>Technical Skills</Card.Title>

                                <div className="d-flex flex-wrap gap-2 mt-3">
                                    <Badge bg="secondary">HTML</Badge>
                                    <Badge bg="secondary">CSS</Badge>
                                    <Badge bg="secondary">JavaScript</Badge>
                                    <Badge bg="secondary">React</Badge>
                                    <Badge bg="secondary">Java</Badge>
                                    <Badge bg="secondary">MySQL</Badge>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="portfolio-card">
                            <Card.Body>
                                <Card.Title>Personal Information</Card.Title>

                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Course:</strong> BSIT
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <strong>Year Level:</strong> First Year
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <strong>Interests:</strong> Technology,
                                        programming, and web development
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
