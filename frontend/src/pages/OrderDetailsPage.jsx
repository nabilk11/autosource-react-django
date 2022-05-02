import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Image, Button, Row, Card, Col, ListGroup, ListGroupItem  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { orderDetailsCall } from '../redux/actions/orderActions';
import axios from 'axios';



export const OrderDetailsPage = () => {
    const dispatch = useDispatch()
    const orderId = useParams().id

    const [ccNum, setCcNum] = useState('')
    const [exp, setExp] = useState('')
    const [sec, setSec] = useState('')
    const [ppUser, setPpUser] = useState('')
    const [ppPass, setPpPass] = useState('')
    


    const [shipping, setShipping] = useState({})

   

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, err, loading } = orderDetails

    

    useEffect(() => {
       
       
    console.log('hello')
    dispatch(orderDetailsCall(orderId))

    const fetchShipping = async (id) => {
        const res = await axios.get('/api/orders/shipping/'+id)
        setShipping(res.data)
    }
    fetchShipping(orderId)
        
           
       
        
       
       
       
        
    }, [orderId])

    const handlePayment = async (e) => {
        e.preventDefault()
        const payment = {
            ccNum: ccNum,
            exp: exp,
            sec: sec,
            ppUser: ppUser,
            ppPass: ppPass,
        }
        try {
        const resPost = await axios.post(`/api/orders/${orderId}/payment/`, payment)
        if (resPost.status == 200) {
        const resPut = await axios.put(`/api/orders/${orderId}/payment/`)
        alert(resPut.data)
        }
        window.location.reload()
            
        } catch (err) {
            console.log(err)
            
        }

    }

  return (
    <Container>
        {order ? <Row>
            
            <Col md={8} >
            <h1>Order Details</h1>
                {order && <Card>
                    <Card.Header>
                       <h2> Order #: {order.data._id}</h2>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                                <Card.Text>
                                    <h2><strong>User Info</strong></h2>
                                    <p>Name: {order.data.user.name} <br />
                                    Email: {order.data.user.email}
                                    
                                    </p>
                                    
                                </Card.Text>
                            </ListGroupItem>
                        <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                   <h3><strong>Products Purchased:</strong></h3>  
                                   {order.data.orderProducts.map((p)=> (
                                       <ul>
                                           <li> <strong> <Link to={`/product/${p.product}`} > {p.name}</Link></strong> qty:
                                           <span> {p.qty}</span>
                                           </li>
                                       </ul>
                                   ))} <br />
                                   
                                </Card.Text>
                                
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                
                                    <h3><strong>Cost:</strong></h3>
                                    <p>Payment Type: {order.data.paymentType}</p>
                                    <p>Tax: $ {order.data.tax}</p>
                                    <p>Shipping: FREE</p>
                                   <h2><strong> Total: $ {order.data.totalPrice} </strong></h2>
                                </Card.Text>
                            </ListGroupItem>
            
                        </ListGroup>
                        
                    </Card.Body>
                </Card>}
            </Col>
            <Col md={4} >
            <Card>
            <h2>Deliver Info</h2>
                <ListGroup>
                    <ListGroupItem>
                    <Card.Text style={{textTransform: "uppercase"}}>
                        <h3><strong>Status:</strong></h3> 
                        
                         {order.data.paymentCompleted ?<> <strong style={{color: 'green'}} >PAID</strong> <br />
                        <strong>Delivery Date: {(new Date(shipping.shippingDate)).toLocaleDateString()}</strong>  </> : <> <strong style={{color: 'red'}} >Unpaid</strong> <br />
                        <strong style={{color: 'red'}} >Processing</strong></>} <br />
                        
                        {(order.data.paymentCompleted && order.data.delivered) && <strong style={{color: 'green'}} >ORDER DELIVERED</strong>} 
                        {(order.data.paymentCompleted && !order.data.delivered) && <strong style={{color: 'red'}} >On its Way!</strong>}
                        


                    </Card.Text>

                    </ListGroupItem>
                    <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                   <h3><strong>Shipping Info:</strong></h3>  
                                   {shipping.address} <br />
                                   {shipping.city}, {shipping.state}, {shipping.zipCode}
                                </Card.Text>
                            </ListGroupItem>


                </ListGroup>
            </Card>
            {!order.data.paymentCompleted && <Card>
                <Card.Text>
                    <h3><strong>Make Your Payment Now!</strong></h3>
                </Card.Text>
               {order.data.paymentType === "paypal" && <Form onSubmit={handlePayment} >
                   <h3>Enter Paypal Login</h3>
                    <Form.Group>
                        <Form.Control type='name' placeholder='Enter Paypal Username' onChange={(e)=> setPpUser(e.target.value)} >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='password' placeholder='Enter Paypal Password' onChange={(e)=> setPpPass(e.target.value)} >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' >Purchase!</Button>
                </Form>}
               {order.data.paymentType === "credit" && <Form onSubmit={handlePayment} >
               <h3>Enter Card Info</h3> <small className='text-muted' >CC# | Expiration | Security</small>
                    <Form.Group>
                        <Form.Control type='name' placeholder='Enter Card Number' onChange={(e)=> setCcNum(e.target.value)} >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='text' placeholder='ex: mm/yy' onChange={(e)=> setExp(e.target.value)} >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='text' placeholder='3/4 Digit Security Code' onChange={(e)=> setSec(e.target.value)} >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' >Purchase!</Button>
                </Form>}
                {order.data.paymentType === "apple" && <Form onSubmit={handlePayment} >
                   <h3>Enter Apply ID & Password</h3>
                    <Form.Group>
                        <Form.Control type='name' placeholder='Enter Paypal Username' onChange={(e)=> setPpUser(e.target.value)} >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='password' placeholder='Enter Paypal Password' onChange={(e)=> setPpPass(e.target.value)} >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' >Purchase!</Button>
                </Form>}
                
            </Card>}
            
            </Col>
        </Row>
        : <h1>No Order</h1>}
    </Container>
  )
}
