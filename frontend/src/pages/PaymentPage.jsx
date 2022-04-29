import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
// import { addPayment } from '../redux/actions/cartActions';

export const PaymentPage = () => {

     // redux
     const cart = useSelector(state => state.cart)
     const { shippingAddress } = cart
     const dispatch = useDispatch()
     // useNavigate
     const navigate = useNavigate()

     const [paymentType, setPaymentType] = useState()


     if (!shippingAddress.address) {
         navigate('/shipping')
     }


     // payment handler
     const handlePayment = (e) => {
         e.preventDefault()
        //  dispatch(addPayment())
        navigate('/order')

     }
  return (
    <Container>
        <Form onSubmit={handlePayment}>
            <h1>Select Payment Type</h1>
            <Form.Group>
                <Form.Check type='radio'
                label='Credit/Debit'
                name='paymentType'
                checked
                onChange={(e) => setPaymentType(e.target.value)} >
                </Form.Check>
            </Form.Group>
            <Form.Group>
                <Form.Check type='radio'
                label='Paypal'
                name='paymentType'
                onChange={(e) => setPaymentType(e.target.value)} >
                </Form.Check>
            </Form.Group>
            <Form.Group>
                <Form.Check type='radio'
                label='ApplePay'
                name='paymentType'
                onChange={(e) => setPaymentType(e.target.value)} >
                </Form.Check>
            </Form.Group>

        </Form>
        



    </Container>
  )
}
