import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';

export const CategoryPage = () => {

    const catId = useParams().id
    const [products, setProducts] = useState()


    useEffect(()=> {
        const fetchCategoryProducts = async () => {
            const res = await axios.get(`/api/category/${catId}/`)
            setProducts(res.data)
        }
        fetchCategoryProducts()
    }, [catId])

  return (
    <Container>
        <h2 className='mt-4'>All Products <br />
        <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />

        {products && <Row>
            {products.map(s => (
                  <Col key={s._id} sm={12} md={6} lg={4} >
                    <Product s={s} />
                  </Col>  
            ))}
        </Row>}


        


    </Container>
        
        

 
    
  )
}
