import { ADD_ORDER_ERROR, 
    ADD_ORDER_START, 
    ADD_ORDER_SUCCESS } from "../reducers/orderReducer";
import { EMPTY_CART } from "../reducers/cartReducer";
import axios from 'axios';

export const orderCall = (order) => async (dispatch, getState) => {

    try {
        dispatch({
            type: ADD_ORDER_START
        })

        // getting token from redux state of logged in user
        const {
            login: {userToken} 
        } = getState()

        // headers with Bearer Token
        const headers = {'Content-Type': 'application/json',
                        Authorization: `Bearer ${userToken.access}`}

        const res = await axios.post(`/api/orders/new/`, order,
        {headers: headers}
        )
        dispatch({
            type: ADD_ORDER_SUCCESS,
            payload: res.data
        })


        dispatch({
            type: EMPTY_CART,
            payload: res.data
        })
        localStorage.removeItem('cartProds')
    } catch (err) {
        dispatch({
        type: ADD_ORDER_ERROR,
        payload: err, 
    })   
    }   
}

export const orderDetailsCall = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: ORDER_DETAILS_START
        })

        // getting token from redux state of logged in user
        const {
            login: {userToken} 
        } = getState()

        // headers with Bearer Token
        const headers = {'Content-Type': 'application/json',
                        Authorization: `Bearer ${userToken.access}`}

        const res = await axios.get(`/api/orders/${id}/`,
        {headers: headers}
        )
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
        type: ORDER_DETAILS_ERROR,
        payload: err, 
    })   
    }   
}