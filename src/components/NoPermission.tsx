import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NoPermission: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <div className="p-5 rounded shadow bg-white text-center" style={{ width: '300px' }}>
        <h1 className="mb-4">Sem Permissão</h1>
        <p>Você não tem permissão para consumir bebidas alcoólicas.</p>
        <Button onClick={handleBackToHome} className="mt-3">Voltar ao Início</Button>
      </div>
    </Container>
  );
};

export default NoPermission;
