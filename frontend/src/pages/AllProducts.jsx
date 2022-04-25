import { React, useState, useEffect } from 'react';
import { Col, Image, Row,  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { allProducts } from '../redux/actions/prodActions'

function AllProducts() {
  // state hook for all products
  // const [products, setProducts] = useState([])
  // Access dispatch
  const dispatch = useDispatch()
  // 
  const payload = useSelector(state => state.allProducts)
  const { products, err, loading } = payload

  useEffect(()=> {
    // const fetchProducts = async () => {
    // const res = await axios.get('/api/products/')
    dispatch(allProducts())
    // fetchProducts()
  },[dispatch])


  return (
    <div >
        <h2 className='mt-4' >All Products <br />
        <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />

        
        {loading ? <Image src={"/images/loading.webp"} />
        : products ? <Row>
            {products.map(s => (
                  <Col key={s._id} sm={12} md={6} lg={4} >
                    <Product s={s} />
                  </Col>  
            ))}
        </Row> 
        : <h1>{err.message}</h1>}
        
    </div>
  )
}

export default AllProducts