import { PRODUCT_ERROR, 
    PRODUCT_START, 
    PRODUCT_SUCCESS } from "../reducers/prodReducer";
import axios from 'axios';



export const allProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_START
        })

        const res = await axios.get('/api/products/')
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: res.data
        })
        // add error handling
    } catch (err) {
        dispatch({
        type: PRODUCT_ERROR,
        payload: err, 
    })
        
    }
}