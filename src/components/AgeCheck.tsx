import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const AgeCheck: React.FC = () => {
  const [age, setAge] = useState<number | string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (typeof age === 'number' && age >= 18) {
      navigate('/alcoholic-beverages');
    } else {
      navigate('/nao-permitido');
    }
  };

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <div className="p-5 rounded shadow bg-white text-center" style={{ width: '300px' }}>
        <h1 className="mb-4">Verificação de Idade</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              placeholder="Digite sua idade"
            />
          </Form.Group>
          <Button onClick={handleSubmit} className="w-100">Entrar</Button>
        </Form>
      </div>
    </Container>
  );
};

export default AgeCheck;
