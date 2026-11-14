
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

export default function Contact() {
    return (
        <>
            <Navigation />

            <Container className="py-5">
                <h1 className="page-heading">Contact Me</h1>

                <p className="text-muted mb-4">
                    Feel free to reach out to me through the following
                    contact information.
                </p>

                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="portfolio-card">
                            <Card.Body className="p-4">
                                <Card.Title className="mb-4">
                                    Get in Touch
                                </Card.Title>

                                <h6>Email Address</h6>
                                <p>
                                    jcnavarro@usa.edu.ph
                                </p>
                                <p>
                                    johnclementnavarro063003@gmail.com
                                </p>

                                <h6>GitHub</h6>
                                <p>
                                    github.com/yourusername
                                </p>

                                <h6>LinkedIn</h6>
                                <p>
                                    linkedin.com/in/yourusername
                                </p>

                                <h6>📱</h6>
                                <p>
                                    09634467067
                                </p>
                                

                                <hr />

                                <Button
                                    variant="primary"
                                    href="mailto:johnclementnavarro063003@gmail.com"
                                >
                                    Send Me an Email
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
