import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { registerCall } from '../redux/actions/userActions';

export const RegisterPage = () => {
// Login Info Refs
const firstName = useRef()
const lastName = useRef()
const email = useRef()
const password = useRef()
const passwordConfirm = useRef()

const [error, setError] = useState()

// redux
const dispatch = useDispatch()
const register = useSelector(state => state.register)
const { loading, userToken, err } = register

// useNavigate
const navigate = useNavigate()

useEffect(() => {
  if(userToken) {
    navigate("/")
  } 
}, [userToken, navigate])


// LOGIN HANDLER
const handleRegister = (e) => {
  e.preventDefault()

  if (password.current.value != passwordConfirm.current.value) {
      setError('Passwords do not match!')
  } else {
    dispatch(registerCall(firstName.current.value, lastName.current.value, email.current.value, password.current.value))
  }
  // navigate("/")

}

  return (
    <div>

      <Container>
        <Card  >
          <Card.Body>
        <Card.Title>Register for SneakerSource!</Card.Title>
        {err && <Alert variant='danger'>{err.message}</Alert>} 
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleRegister} >
          
            <Col md={6} >
            <Row className='mb-3' >
            <Form.Label htmlFor='firstName' >First</Form.Label>
            <Form.Control type='name' ref={firstName} required placeholder='First Name' >
            </Form.Control>
            <Form.Label htmlFor='lastName' >Last</Form.Label>
            <Form.Control type='name' ref={lastName} required placeholder='Last Name'>
            </Form.Control>
            </Row>
            <Row className='mb-3' >
            <Form.Label htmlFor='email' >Email</Form.Label>
            <Form.Control type='email' ref={email} required placeholder='Email' >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='password' >Password</Form.Label>
            <Form.Control type='password' ref={password} required placeholder='Password' >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='passwordConfirm' >Confirm Password</Form.Label>
            <Form.Control type='password' ref={passwordConfirm} required placeholder='Password' >
            </Form.Control>
            </Row>
          </Col>
          <Button type='submit' >
            Register
          </Button>
          <p className="">Forgot Password?</p>
          <p className="">Already Have an Account? <Link to={"/login"} > Login Here</Link></p>
        </Form>
        </Card.Body>
        </Card>
      </Container>
      

    </div>
  )
}
