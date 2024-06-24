import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import MyNavbar from './Navbar';

const UserRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cpf: '',
    birthDate: '',
    cep: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para um servidor ou API.
  };

  

  return (
    

  
    
  <div>
    <MyNavbar />


    <Container className="d-flex flex-column vh-100  align-items-center">
      
      
      <div className="p-5 rounded shadow bg-white text-center" style={{ width: '1400px' }}>
      
        <h1>Cadastro de Usuário</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Digite seu endereço"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="Digite seu CPF"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBirthDate">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCep">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              placeholder="Digite seu CEP"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Digite seu telefone"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>

      </div>
    


    </Container>
    <div/>

  </div>

    
  );
};

export default UserRegistration;
