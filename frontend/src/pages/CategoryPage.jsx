import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { allCategories } from '../redux/actions/categoryActions';

export const CategoryPage = () => {

    const catId = useParams().id
    // const [products, setProducts] = useState([])

    const category = useSelector(state => state.category)
    const { products, loading, err } = category
    const dispatch = useDispatch()


    useEffect(()=> {
        // const fetchCategoryProducts = async () => {
        //     const res = await axios.get(`/api/category/${catId}/`)
        //     setProducts(res.data)
        //     console.log(res.data)
        // }
        // fetchCategoryProducts()
        dispatch(allCategories(catId))
    }, [catId])

  return (
    <Container>
      
       {loading ? <div className='mt-4' style={{textAlign: "center"}} ><Image className='mt-4'  src={"/images/loading.webp"} /></div> : products.length > 0 ? <>{ products[0].category == 1 ? <><h2 className='mt-4'>All Jordans <br /> 
       <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />
       </>
       : products[0].category === 2 ? <><h2 className='mt-4'>All NikeSBs <br /> 
       <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />
       </>
       : products[0].category === 3 ? <><h2 className='mt-4'>All Nikes <br /> 
       <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />
       </>
       : products[0].category === 4 ? <><h2 className='mt-4'>All Yeezys <br /> 
       <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />
       </>
       : products[0].category === 5 ? <><h2 className='mt-4'>Other Brands <br /> 
       <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />
       </>
       : products[0].category === 6 ? <><h2 className='mt-4'>Men's Apparel <br /> 
       <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />
       </>
       : <><h2 className='mt-4'>All Yeezys <br /> 
       <small className='text-muted mb-3'>The very best only at SneakerSource!</small> </h2> <br />
       </>}
       </> : <Alert>No Current Products in this Category!</Alert>}
        {err && <Alert>{err.message}</Alert>}
        

        {products && <Row>
            {products.map(s => (
                  <Col key={s._id} sm={12} md={6} lg={4} >
                    <Product s={s} />
                  </Col>  
            ))}
        </Row>}


        


    </Container>
        
        

 
    
  )
}
