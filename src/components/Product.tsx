import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';



interface ProductProps {
  title: string;
  description: string;
  imgUrl: string;
}

const Product: React.FC<ProductProps> = ({ title, description, imgUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>

    

  );
};








export default Product;
