import React, {useState, useEffect} from 'react'
import { Row,Col, Card } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'
const HomeScreen = () => {

    const[products,setProducts]=useState([]);
    

    useEffect(()=>{
        const fetchProducts=async () =>{
            const {data} = await axios.get('/api/products')
            console.log(data)
            setProducts(data)
        }
        
        fetchProducts()
    },[])
    console.log("PRODUCTS ",products)

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
