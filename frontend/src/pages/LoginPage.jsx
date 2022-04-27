import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { loginCall } from '../redux/actions/userActions';

export const LoginPage = () => {
// Login Info Refs
const email = useRef()
const password = useRef()

// redux
const dispatch = useDispatch()
const login = useSelector(state => state.login)
const { loading, userToken, err } = login

// useNavigate
const navigate = useNavigate()

useEffect(() => {
  if(userToken) {
    navigate("/")
  } 
}, [userToken, navigate])


// LOGIN HANDLER
const handleLogin = (e) => {
  e.preventDefault()
  dispatch(loginCall(email.current.value, password.current.value))
  // navigate("/")

}

  return (
    <div>

      <Container>
        <Card  >
          <Card.Body>
        <Card.Title>Login to SneakerSource!</Card.Title>
        {err && <Alert variant='danger'>{err.message}</Alert>}
        <Form onSubmit={handleLogin} >
          
            <Col md={6} >
            <Row className='mb-3' >
            <Form.Control type='email' ref={email} required placeholder='Email' >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='password' >Email</Form.Label>
            <Form.Control type='password' ref={password} required placeholder='Password' >
            </Form.Control>
            </Row>
          </Col>
          <Button type='submit' >
            Login
          </Button>
          <p className="loginForgot">Forgot Password?</p>
          <p className="loginForgot">Don't Have an Account? <Link to={"/register"} > Register Here</Link></p>
        </Form>
        </Card.Body>
        </Card>
      </Container>
      

    </div>
  )
}
