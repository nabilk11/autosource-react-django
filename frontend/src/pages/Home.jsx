import React from 'react';
import { Col, Row,  } from 'react-bootstrap';
import sneakers from '../dummy_data';
import Product from '../components/Product';

function Home() {
  return (
    <div >
        <h2 className='mt-4' >The Latest Releases!</h2>
        <Row>
            {sneakers.map(s => (
                  <Col key={s._id} sm={12} md={6} lg={4} mb-2 aligncenter >
                    <Product s={s} />
                  </Col>  
            ))}
        </Row>
    </div>
  )
}

export default Home