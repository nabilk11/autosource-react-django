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
            <h1>Order Details</h1>
            <Col>
                {order && <Card>
                    <Card.Header>
                       <h2> Order #: {order.data._id}</h2>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                   <h2><strong> Total: $ {order.data.totalPrice} </strong></h2>
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                    Payment Type: {order.data.paymentType}
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                   <h3>Shipping Info:</h3>  
                                   {shipping.address} <br />
                                   {shipping.city}, {shipping.state}, {shipping.zipCode}
                                </Card.Text>
                                
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                   <h3>Products Purchased:</h3>  
                                   {order.data.orderProducts.map((p)=> (
                                       <ul>
                                           <li> <strong> <Link to={`/product/${p.product}`} > {p.name}</Link></strong> qty:
                                           <span> {p.qty}</span>
                                           </li>
                                       </ul>
                                   ))} <br />
                                   
                                </Card.Text>
                                
                            </ListGroupItem>

                        </ListGroup>
                        
                    </Card.Body>
                </Card>}
            </Col>
        </Row>
    </Container>
  )
}
