import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Card, Col, Row, Image, Form, Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allProducts } from '../redux/actions/prodActions'
import { useDispatch, useSelector } from 'react-redux';

export const ProductList = ({ user, userToken }) => {

  const [products, setProducts] = useState()

  useEffect(()=> {
    const fetchProducts = async () => {
      const headers = {'Content-Type': 'application/json',
                        Authorization: `Bearer ${userToken.access}`}
    const res = await axios.get('/api/products/user/', {headers: headers} 
    )
    console.log(res)
    setProducts(res.data)

  }
  fetchProducts()
},[user])


  const handleDelete = (id) => {

  }
  const handleCreate = (id) => {

  }

  return (
    <Container>
      
        
        {products ? <Row>
          <ul>

            {products.map(s => (
              

              
              
                    <li key={s._id} >
                    <Link to={`/products/${s._id}`}> <strong>{s.name}</strong></Link> <span> | Size: {s.size} </span>
                    <span> | ${s.price}</span>
                    </li>
                  
                    
            ))}
            </ul>
        </Row> 
        : <Alert>😥  😥  😥  No Products 😥  😥  😥 </Alert>}

  <Card>
        <Card.Body>
        <Button className='btn-sm' onClick={handleCreate} >
          List New Product
        </Button>
        </Card.Body>
        </Card>

    </Container>
  )
}
