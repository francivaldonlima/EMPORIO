import React from 'react';
import MyNavbar from './Navbar';
import { Container } from 'react-bootstrap';




const Sobremin: React.FC = () => {
    return (
        <div>
            <MyNavbar/>

            <Container className="d-flex flex-column vh-100 justify-content-center align-items-center">
        
        <div className="p-5 rounded shadow bg-white text-center" style={{ width: '1000px', height: '1000' }}>
            
            <h1>Sobre mim</h1>
            <p>Meu nome é Francivaldo do Nascimento Lima, sou estudante de Desenvolvimento de Sistemas e estou aprendendo a programar em React.</p>
        </div>
        </Container>
        </div>
    );
}

   



export default Sobremin;