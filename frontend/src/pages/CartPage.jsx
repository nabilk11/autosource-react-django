import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, Form, Button, Card } from "react-bootstrap";
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



useEffect(()=> {
  if (cartProdId) {
    dispatch(addToCart(cartProdId, qty))
  }
}, [dispatch, cartProdId, qty])

  return (
    <div>
        CartPage

    </div>
  )
}
