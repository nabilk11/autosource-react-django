import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Card, Col, Row, Image, Form, Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allProducts } from '../redux/actions/prodActions'
import { useDispatch, useSelector } from 'react-redux';

export const ProductList = ({ user, userToken }) => {

  const navigate = useNavigate()

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


  const handleDelete = async (id) => {
    const headers = {'Content-Type': 'application/json',
                        Authorization: `Bearer ${userToken.access}`}
    const res = await axios.delete(`/api/products/delete/${id}`, {headers: headers})
    alert(res.data)
    window.location.reload()

  }
  const handleCreate = async () => {
    const headers = {'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken.access}`}
    const res = await axios.post('/api/products/create/',{}, {headers: headers}) 
    navigate(`/product/${res.data._id}/edit`)


  }

  return (
    <Container>
      
        
        {products ? <Row>
          <Table responsive >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th></th>
                      <th></th>
                      
                    </tr>
                  </thead>
                  <tbody>

            {products.map(s => (
              <tr key={s._id} >
              <td><Link to={`/product/${s._id}`}> <strong>{s.name}</strong></Link></td>
              <td>{s.size}</td>
              <td>${s.price}</td>
              <td></td>
              <td>
              <Button onClick={()=> handleDelete(s._id)} className='btn-sm' >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>

        </Table>
        </Row> 
        : <Alert>No Products</Alert>}

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
