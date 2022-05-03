import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col, Table  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { detailsCall, updateCall } from '../redux/actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';
import { orderListCall } from '../redux/actions/orderActions';
import axios from 'axios'


export const ProductFormPage = () => {

  // redux
  const login = useSelector(state => state.login)
  const { userToken } = login

  const productId = useParams().id 

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState(1)
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState()
  const [count, setCount] = useState(1)
  const [year, setYear] = useState(2022)
  const [size, setSize] = useState('')


  const handleUpdate = async (e) => {
    e.preventDefault()
    const headers = {'Content-Type': 'application/json',
                    Authorization: `Bearer ${userToken.access}`}
    
    const res = await axios.put(`/api/products/update/${productId}/`, {
      name:name, price:price, category:category, color:color,description:description,images:images,count:count,year:year,size:size, 
    }, {headers:headers})


  }

  return (
    <Container>
        <h1>Enter Product Info</h1>
        <Form onSubmit={handleUpdate} >
            <Col className='text-right' md={6} >
            <Row className='mb-3' >
            <Form.Label htmlFor='name' >Name</Form.Label>
            <Form.Control type='name' placeholder='Product Name' onChange={(e)=> setName(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row className='mb-3' >
            <Form.Label htmlFor='number' >Price</Form.Label>
            <Form.Control type='number' placeholder='$0.00' onChange={(e)=> setPrice(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='password' >Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" onChange={(e)=> setDescription(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
            <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Category</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setCategory(e.target.value)}>
              <option value={1} >Jordan</option>
              <option value={2} >NikeSB</option>
              <option value={3} >Nike</option>
              <option value={4} >Yeezy</option>
              <option value={5} >Other</option>
              <option value={6} >Men's Apparel</option>
              <option value={7} >Women's Apparel</option>
            </Form.Control>
          </Form.Group>
          </Row>
            <Row>
            <Form.Label htmlFor='text' >Color</Form.Label>
            <Form.Control type='text' placeholder='Colorway' onChange={(e)=> setColor(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='number' >Qty</Form.Label>
            <Form.Control type='number' placeholder='Qty' onChange={(e)=> setCount(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='number' >Year</Form.Label>
            <Form.Control type='number' placeholder='Year of Release' onChange={(e)=> setYear(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='text' >Size</Form.Label>
            <Form.Control type='text' placeholder='Size' onChange={(e)=> setSize(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={(e)=> setImages(e.target.value)} />
              </Form.Group>
            </Row>
            <Row>
            <Button type='submit' >
            Update
          </Button>

            </Row>
          </Col>
          
        </Form>
        
    </Container>
  )
}
