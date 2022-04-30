import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { detailsCall, updateCall } from '../redux/actions/userActions';


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

const userUpdate = useSelector(state => state.userUpdate)
const { message } = userUpdate

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
        dispatch(updateCall({
            'id': user.id,
            'name': name,
            'email': email,
            'password': password,
}))
        
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
            <Form.Control type='name' placeholder={name} onChange={(e)=> setName(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row className='mb-3' >
            <Form.Label htmlFor='email' >Email</Form.Label>
            <Form.Control type='email' placeholder={email} onChange={(e)=> setEmail(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row>
            <Form.Label htmlFor='password' >Password</Form.Label>
            <Form.Control type='password' placeholder={password} onChange={(e)=> setPassword(e.target.value)}  >
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
