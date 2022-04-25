import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, Form, Button, Card } from "react-bootstrap";
import { addToCart } from '../redux/actions/cartActions';

export const CartPage = ({ location }) => {
  // useParams hook to obtain id
const id = useParams().id;

// find qty from params
const qty = location.search
console.log('qty', qty)

  return (
    <div>
        CartPage

    </div>
  )
}
