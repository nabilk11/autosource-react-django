import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import sneakers from '../dummy_data';

function ProductPage() {

const [sneaker, setSneaker] = useState({});
const id = useParams().id;

useEffect(() => {
    const fetchSneaker = () => {
        const res = sneakers.find((s)=> 
            s._id == id
        )
        setSneaker(res)
    }
    fetchSneaker();
}, [id])



  return (
    <div className='mt-5'>
        <Card>
            <Row>
                <Col md={6}>
                    <h2>{sneaker.name}</h2>
                    <h5 className='text-muted'>{sneaker.color}</h5>
                    <p><strong>{sneaker.year}</strong></p>  
                    <p><strong>{sneaker.description}</strong></p>
                    {sneaker.in_stock ? <Image width={"100px"} fluid src={"/images/instock.jpeg"} />
                    :<Image width={"100px"} fluid src={"/images/soldout.jpeg"}/>} 
                </Col>

                <Col md={6}>
                    <Image fluid src={sneaker.images}></Image>
                </Col>
            </Row>
        </Card>
        <Card>
            <Row>
                <Col md={6}>
                  
                </Col>
                <Col as={"div"} md={6}>
                    <h3>Select Size & Add to Cart</h3>

                    <h4>{sneaker.price}</h4>
                    <Button>Add to Cart</Button>   
                </Col>
            </Row>
        </Card>
        
        
    </div>
  )
}

export default ProductPage