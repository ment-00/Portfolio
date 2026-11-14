
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";

export default function Navigation() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    My Portfolio
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/about">
                            About
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/projects">
                            Projects
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/skills">
                            Skills
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
