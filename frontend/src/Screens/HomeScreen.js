import React from 'react';
import products from '../products';
import { Row,Col, Card } from 'react-bootstrap';
import Product from '../Components/Product';
const HomeScreen = () => {
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4}>
                        <Product product={product} />
                    </Col>
                    
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
