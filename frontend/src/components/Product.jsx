import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Product({s}) {
  return (
    <div>
        <Card className='my-3 py-3' >
            <a href={"/product/${product.id"} style={{textDecoration: "none", color: 'inherit'}} >
                <Card.Title ><strong>{s.name}</strong><br />
                    <small className='text-muted' >{s.category}</small>
                </Card.Title>
                <Card.Img  src={s.images} alt="" />
                <Card.Body>
                    <p className='text-muted' >{s.year}</p>
                    <Card.Text as={"div"} height={"80px"}>
                        <p>{s.description}</p>
                    </Card.Text>
                    <Card.Text as={"h4"} >
                        Price:<strong> {s.price}</strong>
                    </Card.Text>
                    
                    <Button>Add to Cart</Button>
                </Card.Body>
            </a>
        </Card>
    </div>
  )
}

export default Product