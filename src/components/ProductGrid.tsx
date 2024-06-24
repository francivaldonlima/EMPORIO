import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';
import MyNavbar from './Navbar';


const products = [
    { title: 'Produto 1', description: 'Descrição do Produto 1', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 2', description: 'Descrição do Produto 2', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 3', description: 'Descrição do Produto 3', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 4', description: 'Descrição do Produto 4', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 5', description: 'Descrição do Produto 5', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 6', description: 'Descrição do Produto 6', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 7', description: 'Descrição do Produto 7', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 8', description: 'Descrição do Produto 8', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 9', description: 'Descrição do Produto 9', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 10', description: 'Descrição do Produto 10', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 11', description: 'Descrição do Produto 11', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 12', description: 'Descrição do Produto 12', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 13', description: 'Descrição do Produto 13', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 14', description: 'Descrição do Produto 14', imgUrl: 'https://via.placeholder.com/150' },
    { title: 'Produto 15', description: 'Descrição do Produto 15', imgUrl: 'https://via.placeholder.com/150' },
];

const ProductGrid: React.FC = () => {
    return (
        <div>

            <MyNavbar />
            <h1>Produtos</h1>
            <Container className="d-flex flex-column vh-100  align-items-center">
            <div className="p-5 rounded shadow bg-white text-center" style={{ width: '1800px' }}>
                <Row>
                    {products.map((product, idx) => (
                        <Col key={idx} lg={3} md={4} sm={4} xs={4} className="mb-4">
                            <Product title={product.title} description={product.description} imgUrl={product.imgUrl} />
                        </Col>

                    ))}
                </Row>
                </div>
            </Container>
        </div>
        
    );
};

export default ProductGrid;
