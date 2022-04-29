import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Container, Alert, Button, Row, Card, Col  } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { addShippingAddress } from '../redux/actions/cartActions';


export const ShippingPage = () => {
    // redux
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const dispatch = useDispatch()
    // useNavigate
    const navigate = useNavigate()



    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [zipCode, setZipCode] = useState(shippingAddress.zipCode)
    const [state, setState] = useState(shippingAddress.state)
    const [country, setCountry] = useState(shippingAddress.country)

    


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('sub')
        dispatch(addShippingAddress({address, city, state, zipCode, country}))
        navigate('/payment')

    }
  return (
    <Container>
        <Form onSubmit={handleSubmit} >
            <h1>
                Enter Your Shipping Address
            </h1>
            <Form.Group className='mt-3' >
                <Form.Control required type='text' 
                placeholder='Street Address' 
                value={address ? address : ''} 
                onChange={(e) =>setAddress(e.target.value)
                } >     
                </Form.Control>
            </Form.Group>

            <Form.Group className='mt-3' >
                <Form.Control required type='text' 
                placeholder='City' 
                value={city ? city : ''} 
                onChange={(e) =>setCity(e.target.value)
                } >     
                </Form.Control>
            </Form.Group>
            <Form.Group className='mt-3' >
                <Form.Control required type='text' 
                placeholder='State' 
                value={state ? state : ''} 
                onChange={(e) =>setState(e.target.value)
                } >     
                </Form.Control>
            </Form.Group>
            <Form.Group className='mt-3' >
                <Form.Control required type='text' 
                placeholder='Zip Code' 
                value={zipCode ? zipCode : ''} 
                onChange={(e) =>setZipCode(e.target.value)
                } >     
                </Form.Control>
            </Form.Group>
            <Form.Group className='mt-3 mb-4' >
                <Form.Control required type='text' 
                placeholder='Country' 
                value={country ? country : ''} 
                onChange={(e) =>setCountry(e.target.value)
                } >     
                </Form.Control>
            </Form.Group>
            
            <Button type='submit' >
                Submit
            </Button>
        </Form>


    </Container>
  )
}
