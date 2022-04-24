import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// NOTES
// fix category with conditional



function Product({s}) {
  return (
    <div>
        <Card className='my-3 py-3' variant='fluid' >
            <Link to={`/product/${s._id}`} style={{textDecoration: "none", color: 'inherit'}} >
                <Card.Title ><strong>{s.name}</strong><br />
                    <small className='text-muted' >{s.category}</small>
                </Card.Title>
                <Card.Img  src={s.images} alt="" />
            </Link>
                <Card.Body>
                    <p className='text-muted' >{s.year}</p>
                    <Card.Text as={"div"} height={"80px"}>
                        <p>{s.description}</p>
                    </Card.Text>
                    <Card.Text as={"h4"} >
                       <p>Price: <strong>${s.price}</strong></p>
                    </Card.Text>
                    <Link to={`/product/${s._id}`} style={{textDecoration: "none", color: 'inherit'}} >
                        <Button>See More</Button>
                    </Link>
                </Card.Body>
            
        </Card>
    </div>
  )
}

export default Product