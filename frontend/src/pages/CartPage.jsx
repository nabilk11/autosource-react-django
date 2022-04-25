import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroupItem, Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import { addToCart } from '../redux/actions/cartActions';

export const CartPage = () => {
// useParams hook to obtain id
const cartProdId = useParams().id;
// useLocation for url location object
const location = useLocation()
// dispatch hook
const dispatch = useDispatch()
// find qty from params
const qty = location.search ? Number(location.search.split('=')[1]) : 1 
// useSelector hook to obtain new cart state
const cart = useSelector(state => state.cart)
const { cartProds } = cart
console.log(cartProds)


useEffect(()=> {
  if (cartProdId) {
    dispatch(addToCart(cartProdId, qty))
  }
}, [dispatch, cartProdId, qty])


const removeProd = (id) => {

}
  return (
    <div>
        <h1>Shopping Cart</h1>
        <Row>
          <Col md={12} >
            {cartProds.length === 0 
            ? <Alert>
              Your Cart is Currently Empty!
            </Alert>
            : <Card>
              {cartProds.map(p => (
                <ListGroup>
                  <ListGroupItem className='mt-5' >
                <Row>
                  <Col md={2} >
                    <Image width={'70px'} src={p.images} />
                  </Col>
                  <Col md={3} >
                    <Link to={`/product/${p.product}`}>{p.name}</Link>
                  </Col>
                  <Col md={2} >
                    $ {p.price}
                  </Col>
                  <Col md={2} >
                  <Form.Control value={p.stock} as="select" onChange={(e)=> dispatch(addToCart(p.product, e.target.value))} >
                        {[...Array(p.count).keys()].map((p) => (
                            <option key={p+2} value={p+1} >{p+1}</option>
                        ))}
                    </Form.Control>
                  </Col>
                  <Col md={1} >
                    <Button onClick={()=> removeProd(p.product) } >
                          Remove
                    </Button>
                  </Col>
                </Row>
                </ListGroupItem>
                </ListGroup>
              ))}
              </Card>}
          </Col>
          <Col>
          
          </Col>
        </Row>

    </div>
  )
}
