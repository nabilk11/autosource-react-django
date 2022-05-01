import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Image, Button, Row, Card, Col, ListGroup, ListGroupItem  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { orderDetailsCall } from '../redux/actions/orderActions';
import axios from 'axios';



export const OrderDetailsPage = () => {
    const dispatch = useDispatch()
    const orderId = useParams().id

    const [shipping, setShipping] = useState({})

   

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, err, loading } = orderDetails

     // Calculations
    
    // if (order) {
    //     order.subtotal = order.cartProds.reduce((x, y) => x + y.price * y.stock, 0).toFixed(2)

    // }
    

    useEffect(() => {
       const fetchShipping = async (id) => {
           const res = await axios.get('/api/orders/shipping/'+id)
           setShipping(res.data)
       }
       
       dispatch(orderDetailsCall(orderId))
       fetchShipping(orderId)
       
        
    }, [orderId])



  return (
    <Container>
        <Row>
            
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
            {(shipping && order) && <Card>
            <h2>Deliver Info</h2>
                <ListGroup>
                    <ListGroupItem>
                    <Card.Text style={{textTransform: "uppercase"}}>
                        <h3><strong>Status:</strong></h3>
                        {order.data.paymentCompleted ? <strong style={{color: 'green'}} >PAID</strong> : <strong style={{color: 'red'}} >Unpaid</strong>} <br />
                         {order.data.delivered ? <strong style={{color: 'green'}} >ORDER DELIVERED</strong> :<> <strong style={{color: 'red'}} >On its Way!</strong> <br />
                       <strong>Delivery Date: {(new Date(shipping.shippingDate)).toLocaleDateString()}</strong> </>}


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
            </Card>}
            
            </Col>
        </Row>
    </Container>
  )
}
