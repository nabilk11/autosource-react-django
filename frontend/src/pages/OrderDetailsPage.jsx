import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Image, Button, Row, Card, Col, ListGroup, ListGroupItem  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { orderDetailsCall } from '../redux/actions/orderActions';
import axios from 'axios';



export const OrderDetailsPage = () => {
    const dispatch = useDispatch()
    const orderId = useParams().id

   

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, err, loading } = orderDetails

     // Calculations
    
    // if (order) {
    //     order.subtotal = order.cartProds.reduce((x, y) => x + y.price * y.stock, 0).toFixed(2)

    // }
    

    useEffect(() => {
    //    const fetchShipping = async () => {
    //        const res = await axios.get('/api/orders/'+orderId)
    //        console.log(res)
    //    }
       
       dispatch(orderDetailsCall(orderId))
       
        
    }, [orderId])



  return (
    <Container>
        <Row>
            <Col>
                {order && <Card>
                    <Card.Header>
                        Order #: {order.data._id}
                    </Card.Header>
                    <Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                                <Card.Text>
                                   <h2><strong> Total: $ {order.data.totalPrice} </strong></h2>
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text style={{textTransform: "uppercase"}} >
                                    Payment Type: {order.data.paymentType}
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
