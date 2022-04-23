import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import sneakers from '../dummy_data';

function Home() {
  return (
    <div>
        <h1>ALL NEW PRODUCTS!</h1>
        <Row>
            {sneakers.map(s => (
                  <Col sm={12} md={6} lg={4} mb-2 >
                    <h3>{s.name} <br />
                    <small className='text-muted' >{s.category}</small></h3>
                    <img width={'150px'} src={s.images} alt="" />
                    <p>{s.description}</p>
                    <p>Price:<strong> {s.price}</strong></p>
                    <Button>Add to Cart</Button>
                  </Col>  
            ))}
        </Row>
    </div>
  )
}

export default Home