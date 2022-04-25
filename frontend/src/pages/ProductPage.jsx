import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Image, Form, Alert } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';



function ProductPage() {
// state hook for sneakers
const [product, setProduct] = useState({});
// useParams hook to obtain id
const id = useParams().id;
// state hook for stock
const [stock, setStock] = useState(1);
// useNavigate Hook for redirect
const navigate = useNavigate();



// useEffect hook to setSneaker
useEffect(() => {
    const fetchProduct = async () => {
        const res = await axios.get('/api/products/'+id)
        // sneakers.find((s)=> 
        //     s._id === id
        // )
        setProduct(res.data)
    }
    fetchProduct();
}, [id])

// CART HANDLER
const cartHandler = () => {
    navigate(`/cart/${id}?qty=${stock}`)

}

  return (
    <div className='mt-5'>
        <Card>
            <Row>
                <Col md={6}>
                    <h2>{product.name}</h2>
                    <h5 className='text-muted'>{product.color}</h5>
                    <p style={{color: "crimson"}} ><strong>{product.year}</strong></p>  
                    <p><strong>{product.description}</strong></p>
                    {product.count > 0 ? <Image width={"100px"} fluid src={"/images/instock.jpeg"} />
                    :<Image width={"100px"} fluid src={"/images/soldout.jpeg"}/>} 
                    {product.count === 1 && <Alert variant='success' >Hurry! Only One Left!</Alert>}
                </Col>

                <Col md={6}>
                    <Image fluid src={product.images} />
                </Col>
            </Row>
        </Card>
        <Card>
            <Row>
                <Col as={"div"} md={12} style={{textAlign: "center"}} >
                    <h3>Select Qty:</h3>
                    {product.count > 0 && 
                    <Form.Control value={stock} as="select" onChange={(e)=> setStock(e.target.value)} >
                        {[...Array(product.count).keys()].map((p) => (
                            <option key={p+2} value={p+1} >{p+1}</option>
                        ))}
                    </Form.Control> }

                    <h4>$ {product.price}.00</h4>
                    <Button onClick={cartHandler} variant='primary' disabled={product.count === 0} type='button'>Add to Cart</Button>   
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export default ProductPage