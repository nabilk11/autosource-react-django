import { React, useState, useEffect } from 'react';
import { Col, Row,  } from 'react-bootstrap';
import sneakers from '../dummy_data';
import Product from '../components/Product';
import axios from 'axios';

function Home() {
  // state hook for all products
  const [products, setProducts] = useState([])

  useEffect(()=> {
    const fetchProducts = async () => {
    const res = await axios.get('/api/products/')
    setProducts(res.data)
    // console.log(res)
    }
    fetchProducts()
  },[])


  return (
    <div >
        <h2 className='mt-4' >The Latest Releases <br />
        <small className='text-muted mb-3' >Are Here at SneakerSource!</small> </h2>
        <Row>
            {products.map(s => (
                  <Col key={s._id} sm={12} md={6} lg={4} >
                    <Product s={s} />
                  </Col>  
            ))}
        </Row>
        
    </div>
  )
}

export default Home