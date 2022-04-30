import { ADD_ORDER_ERROR, 
    ADD_ORDER_START, 
    ADD_ORDER_SUCCESS } from "../reducers/orderReducer";
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

        const res = await axios.post(`/api/orders/new/`,
        {headers: headers}
        )
        dispatch({
            type: ADD_ORDER_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
        type: ADD_ORDER_ERROR,
        payload: err, 
    })   
    }   
}