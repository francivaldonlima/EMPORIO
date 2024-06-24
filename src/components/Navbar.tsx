import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';


const MyNavbar: React.FC = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">EMPÓRIO CACHAÇA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/product-grid">PRODUTOS</Nav.Link>
                            <Nav.Link href="#">CADASTRO</Nav.Link>
                            <Nav.Link href="sobre-min">SOBRE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MyNavbar;