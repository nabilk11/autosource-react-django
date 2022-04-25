import { React, useState, useEffect } from 'react';
import { Col, Row,  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import axios from 'axios';
import { allProducts } from '../redux/actions/prodActions'

function Home() {
  // state hook for all products
  // const [products, setProducts] = useState([])
  // Access dispatch
  const dispatch = useDispatch()
  // 
  const payload = useSelector(state => state.allProducts)
  const { products } = payload

  useEffect(()=> {
    // const fetchProducts = async () => {
    // const res = await axios.get('/api/products/')
    dispatch(allProducts())
    // fetchProducts()
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