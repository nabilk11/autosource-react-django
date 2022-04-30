import { CART_ERROR, 
    ADD_TO_CART, 
    REMOVE_FROM_CART, ADD_SHIPPING, ADD_PAYMENT } from "../reducers/cartReducer";
import axios from 'axios';
import { Action } from "history";

export const addToCart = (id, stock) => async (dispatch, getState) => {
    const res = await axios.get('/api/products/'+id)

    dispatch({
        type: ADD_TO_CART,
        payload:{
            product:res.data._id,
            name:res.data.name,
            price:res.data.price,
            images:res.data.images,
            count:res.data.count,
            stock,
        }
    })
    localStorage.setItem('cartProds', JSON.stringify(getState().cart.cartProds))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id, 
    })
    localStorage.setItem('cartProds', JSON.stringify(getState().cart.cartProds))

}


export const addShippingAddress = (formData) => (dispatch) => {
    dispatch({
        type: ADD_SHIPPING,
        payload: formData, 
    })
    localStorage.setItem('shippingAddress', JSON.stringify(formData))

}

export const addPaymentType = (formData) => (dispatch) => {
    dispatch({
        type: ADD_PAYMENT,
        payload: formData, 
    })
    localStorage.setItem('paymentType', JSON.stringify(formData))

}