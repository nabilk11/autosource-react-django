import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { addPaymentType } from '../redux/actions/cartActions';

export const PaymentPage = () => {

     // redux
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const dispatch = useDispatch()
     // useNavigate
    const navigate = useNavigate()

    const [paymentType, setPaymentType] = useState()


      // payment handler
    const handlePayment = (e) => {
    e.preventDefault()
    dispatch(addPaymentType(paymentType))
    navigate('/order')

    if (!shippingAddress.address) {
         navigate('/shipping')
     }


   

     }
  return (
    <Container>
        <Form onSubmit={handlePayment}>
            <h1>Select Payment Type</h1>
            <Form.Group>
                <Form.Check type='radio'
                label='Credit/Debit'
                name='paymentType'
                id='credit'
                value='credit'
                
                onChange={(e) => setPaymentType(e.target.value)} >
                </Form.Check>
            </Form.Group>
            <Form.Group>
                <Form.Check type='radio'
                label='Paypal'
                name='paymentType'
                id='paypal'
                value='paypal'
                onChange={(e) => setPaymentType(e.target.value)} >
                </Form.Check>
            </Form.Group>
            <Form.Group>
                <Form.Check type='radio'
                label='Apple Pay'
                name='paymentType'
                id='apple'

                value='apple'
                onChange={(e) => setPaymentType(e.target.value)} >
                </Form.Check>
            </Form.Group>

            <Button type='submit'>
                Select
            </Button>
        </Form>
        



    </Container>
  )
}
