import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Button, Card, Col, Row, Image, Form, Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allProducts } from '../redux/actions/prodActions'

export const ProductList = () => {


  const dispatch = useDispatch()
  // 
  const payload = useSelector(state => state.allProducts)
  const { products, err, loading } = payload

  useEffect(()=> {
    // const fetchProducts = async () => {
    // const res = await axios.get('/api/products/')
    dispatch(allProducts())
    // fetchProducts()
  },[dispatch])


  const handleDelete = (id) => {

  }

  return (
    <Container>

        {loading ? <Image src={"/images/loading.webp"} />
        : products ? <Row>

            {products.map(s => (
              <Table>

              
                  <ListGroup key={s._id} sm={12} md={6} lg={4} >
                    <ListGroupItem>

                    </ListGroupItem>
                  </ListGroup>
                  </Table>  
            ))}
        </Row> 
        : <Alert>😥  😥  😥  {err.message} 😥  😥  😥 </Alert>}



    </Container>
  )
}
