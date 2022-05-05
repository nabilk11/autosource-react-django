import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Button, Container, Form, Row, FormControl } from 'react-bootstrap'

export const ContactPage = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [success, setSuccess] = useState()



    const handleContact = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/contact/', {email, subject, message})
        setSuccess(res.data)
        window.location.reload()
    }
  return (
    <Container style={{textAlign: 'center'}}>
        {success && <Alert variant='success' >{success}</Alert>}
        <Container className='mt-4' >
        <Form onSubmit={handleContact} >
            <h2>Contact Us</h2>
        <Row className='mb-3' >
            <Form.Control type='email' placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)}  >
            </Form.Control>
            </Row>
        <Row className='mb-3' >
            <Form.Control type='text' placeholder='Enter Subject' onChange={(e)=> setSubject(e.target.value)}  >
            </Form.Control>
            </Row>
        <Row>
            <Form.Control as="textarea" placeholder="Enter Your Message" onChange={(e)=> setMessage(e.target.value)}  >
            </Form.Control>
            </Row>
            <Row className='mt-4' >
                <Button type='submit' >Submit</Button>
            </Row>
        </Form>
        </Container>


    </Container>
       


   
  )
}
