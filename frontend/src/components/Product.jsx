import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Product({s}) {
  return (
    <div>
        <Card className='my-3 py-3' >
            <a href={"/product/${product.id"} style={{textDecoration: "none", color: 'inherit'}} >
                <h3>{s.name} <br />
                <small className='text-muted' >{s.category}</small></h3>
                <Card.Img width={'150px'} src={s.images} alt=""></Card.Img>
                <p className='text-muted' >{s.year}</p>
                <p>{s.description}</p>
                <p>Price:<strong> {s.price}</strong></p>
                <Button>Add to Cart</Button>
            </a>
        </Card>
    </div>
  )
}

export default Product