import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Image, Button, Row, Card, Col, ListGroup, ListGroupItem  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { orderCall } from '../redux/actions/orderActions';
import { ORDER_RESET } from '../redux/reducers/orderReducer';

export const OrderPage = () => {

     // redux
    const addOrder = useSelector(state => state.addOrder)
    const { order, err, message } = addOrder

     const cart = useSelector(state => state.cart)
     const { shippingAddress, paymentType, cartProds } = cart
     const dispatch = useDispatch()
      // useNavigate
     const navigate = useNavigate()

     // Calculations
     cart.subtotal = cartProds.reduce((x, y) => x + y.price * y.stock, 0).toFixed(2)
     cart.tax = Number((0.08875) * cart.subtotal).toFixed(2)
     cart.total = (Number(cart.subtotal) + Number(cart.tax)).toFixed(2) 

     if (!paymentType) {
         navigate('/payment')
     }

     useEffect(() => {
         if (message) {
             navigate(`/order/${order._id}`)
             dispatch({type: ORDER_RESET })
         }
     })

     const orderSubmit = () => {
         dispatch(orderCall({
            products: cartProds,
            shippingAddress: shippingAddress,
            paymentType: paymentType,
            tax:cart.tax,
            shipping: 0,
            total: cart.total,


         }))
         
     }




  return (
    <Container>
        
            <Row>
                <Col md={10} >
                    <Card>
                        <Card.Title><strong>Shipping Info</strong></Card.Title>
                        <Card.Text>{shippingAddress.address},  {shippingAddress.city}, {shippingAddress.state}, {shippingAddress.zipCode} <br />
                        {shippingAddress.country} </Card.Text>
                    </Card>
                    <Card>
                        <Card.Title><strong>Payment Type</strong></Card.Title>
                        <Card.Text style={{textTransform: 'uppercase'}} > {paymentType} </Card.Text>
                        
                    </Card>
                    <Card>
                        <Card.Title><strong>Current Cart</strong></Card.Title>
                        <ListGroup  > {cartProds.map((product) => (
                            <ListGroupItem key={product.product} >
                                <Col md={2} >
                                <Image width={'70px'} src={product.images} />
                                
                                </Col>

                                <Col md={4} >
                                <h4> <Link to={`/product/${product.product}`}> {product.name}</Link></h4>
                                <span>${product.price}</span>
                                <p>Qty: {product.stock}</p>
                                </Col>

                                <Col>
                                Total: $ {(product.stock * product.price).toFixed(2)} 
                                </Col>
                                
                            </ListGroupItem>
                            

                        ))} </ListGroup>
                    </Card>


                </Col>
                <Col md= {4}>
                    <Card>
                        <h2>Summary</h2>
                        <ListGroup>
                            <ListGroupItem>
                                {err && <Alert variant='danger' >{err.message}</Alert>}
                                {message && <Alert>{message}</Alert>}
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Subtotal: $ {cart.subtotal}  
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Shipping: $ 0.00
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Tax: $ {cart.tax}
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                   <strong>Total Price: $ {cart.total}</strong>
                                </Card.Text>
                            </ListGroupItem>
                            <Button onClick={orderSubmit} >
                                Submit Order
                            </Button>
                        </ListGroup>

                    </Card>
                
                </Col>
            </Row>
        
        


    </Container>
  )
}
