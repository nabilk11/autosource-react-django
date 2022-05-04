import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col, Table  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { detailsCall, updateCall } from '../redux/actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';
import { orderListCall } from '../redux/actions/orderActions';
import { ProductList } from '../components/ProductList';


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

const orderList = useSelector(state => state.orderList)
const { orders } = orderList

// useNavigate
const navigate = useNavigate()

useEffect(() => {
    if(!userToken) {
        navigate("/login")
    } else {
            dispatch(detailsCall('profile'))
            setName(user.name)
            setEmail(user.email)
            dispatch(orderListCall())
        
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
      <Row>
      <Card>
                <h1><strong>{user.name}'s Profile</strong></h1>
                <Card.Text>
                  <p><strong>Email: {user.email}</strong></p>
                </Card.Text>
                </Card>
      </Row>
      <Row>
      <h1><strong>Sneaker News</strong></h1>

      </Row>
      <Row>
      <h1><strong>Current Products Listed</strong></h1>
      <ProductList userToken={userToken} user={user} />

      </Row>
       <Row>

            <Col md={9} >
                {orders && <Card>
                <h1><strong>All Orders</strong></h1>
                <Table responsive >
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Delivered</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o)=> (
                      <tr key={o._id} >
                        <td>{o._id}</td>
                        <td>{(new Date(o.createdAt)).toLocaleDateString()}</td>
                        <td>${o.totalPrice}</td>
                        <td>{o.paymentCompleted ? 'Yes' : 'No'}</td>
                        <td>{o.delivered ? 'Yes' : 'No'}</td>
                        <td>
                          <Link to={`/order/${o._id}`} >View</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  
                </Table>

                    
                </Card>}
            </Col>
            <Col md={3} style={{alignItems: "right"}}>
                <Card>
                <h1>Edit Info</h1>
                {err && <Alert variant='danger'>{err.message}</Alert>} 
        {/* {error && <Alert variant='danger'>{error}</Alert>} */}
        <Form onSubmit={handleUpdate} >
            <Col className='text-right' md={6} >
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
            <Row>
            <Button type='submit' >
            Update
          </Button>

            </Row>
          </Col>
          
        </Form>
                    
                </Card>
            </Col>
       

        </Row>

    </Container>
  )
}
