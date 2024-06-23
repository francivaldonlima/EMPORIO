import React from 'react';
import { Navbar, Container, Nav, Carousel, Card, Row, Col } from 'react-bootstrap';
import cachacaImage from '../assets/cachaca01.webp';
import car01Image from '../assets/car01.jpg';
import car02Image from '../assets/car02.jpg';
import car03Image from '../assets/car03.jpg';
import car04Image from '../assets/car04.jpg';
import Badge from 'react-bootstrap/Badge';

const AlcoholicBeverages: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Loja de Bebidas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Produtos</Nav.Link>
              <Nav.Link href="#">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="d-flex flex-column vh-100 justify-content-center align-items-center">
        <div className="p-5 rounded shadow bg-white text-center" style={{ width: '1000px', height: '1000' }}>
          <h1 className="mb-4">Loja de Bebidas Alcoólicas</h1>
          <Carousel>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={car01Image}
                alt="CACHAÇA"
              />
              <Carousel.Caption className="bg-dark-transparent d-none d-md-block">
                <h3>CACHAÇA</h3>
                <p>cachaças de alta qualidade.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={car02Image}
                alt="Viçosa do Ceará"
              />
              <Carousel.Caption className="bg-dark-transparent d-none d-md-block">
                <h3>Capital da Cachaça</h3>
                <p>Viçosa do Ceará.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={car03Image}
                alt="Dia da cachaça"
              />
              <Carousel.Caption className="bg-dark-transparent d-none d-md-block">
                <h3>Dia da cachaça</h3>
                <p>degustar uma boa caninha.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={car04Image}
                alt="Vodka"
              />
              <Card.Body>
              <Carousel.Caption className="bg-dark-transparent d-none d-md-block">
                <h3>PRODUTOS DO BARÃO</h3>
                <p>CACHAÇA, MEL E RAPADURA DE CEARÁ-MIRIM/RN .</p>
                
              </Carousel.Caption>
              </Card.Body>
            </Carousel.Item>
          </Carousel>
          <div className="mt-4">
            <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cachacaImage} />
                <Card.Body>
                  <Card.Title>Vinho</Card.Title>
                  <Card.Text className="text-dark">Descrição do vinho.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150x100.png?text=Cerveja" />
                <Card.Body>
                  <Card.Title>Cerveja</Card.Title>
                  <Card.Text>Descrição da cerveja.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150x100.png?text=Whisky" />
                <Card.Body>
                  <Card.Title>Whisky</Card.Title>
                  <Card.Text>Descrição do whisky.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150x100.png?text=Vodka" />
                <Card.Body>
                  <Card.Title>Vodka</Card.Title>
                  <Card.Text>Descrição da vodka.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AlcoholicBeverages;
