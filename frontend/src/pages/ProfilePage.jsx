import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { detailsCall, loginCall } from '../redux/actions/userActions';


export const ProfilePage = () => {
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
// const [name, setName] = useState()


// redux
const dispatch = useDispatch()
const userDetails = useSelector(state => state.userDetails)
const { loading, user, err } = userDetails

const login = useSelector(state => state.login)
const { userToken } = login

// useNavigate
const navigate = useNavigate()

useEffect(() => {
    if(!userToken) {
        navigate("/login")
    } else {
        
            dispatch(detailsCall('profile'))
       
            setName(user.name)
            setEmail(user.email)
        
    }
    }, [dispatch])


    // LOGIN HANDLER
const handleUpdate = (e) => {
        e.preventDefault()
        // dispatch(loginCall(email.current.value, password.current.value))
        // navigate("/")
  }




  return (
    <Container>
        <Col>
            <Row>
                <Card>
                <h1>Profile</h1>

                </Card>
            </Row>
            <Row>
                <Card>
                <h1>Orders</h1>
                    
                </Card>
            </Row>
            <Row>
                <Card>
                <h1>Edit Profile</h1>
                {err && <Alert variant='danger'>{err.message}</Alert>} 
        {/* {error && <Alert variant='danger'>{error}</Alert>} */}
        <Form onSubmit={handleUpdate} >
            <Col md={6} >
            <Row className='mb-3' >
            <Form.Label htmlFor='name' >Name</Form.Label>
            <Form.Control type='name' value={name} onChange={(e)=> setName(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row className='mb-3' >
            <Form.Label htmlFor='email' >Email</Form.Label>
            <Form.Control type='email' value={email} onChange={(e)=> setEmail(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='password' >Password</Form.Label>
            <Form.Control type='password' value={password} onChange={(e)=> setPassword(e.target.value)}  >
            </Form.Control>
            </Row>
            {/* <Row>
            <Form.Label htmlFor='passwordConfirm' >Confirm Password</Form.Label>
            <Form.Control type='password' ref={passwordConfirm} required placeholder='Password' >
            </Form.Control>
            </Row> */}
          </Col>
          <Button type='submit' >
            Update
          </Button>
        </Form>
                    
                </Card>
            </Row>
        </Col>

        <Col>

        </Col>
        
    </Container>
  )
}
