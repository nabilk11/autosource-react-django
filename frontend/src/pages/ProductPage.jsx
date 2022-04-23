import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, ListGroup } from 'react-bootstrap';
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
    <div>
        Product page
        {sneaker.name}
    </div>
  )
}

export default ProductPage