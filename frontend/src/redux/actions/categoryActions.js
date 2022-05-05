import { CATEGORY_ERROR, 
    CATEGORY_START, 
    CATEGORY_SUCCESS } from "../reducers/categoryReducers";
import axios from 'axios';



export const allCategories = (id) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_START,
            loading: true
        })

        const res = await axios.get(`/api/category/${id}`)
        dispatch({
            type: CATEGORY_SUCCESS,
            payload: res.data,
            loading: false
        })
        // add error handling
    } catch (err) {
        dispatch({
        type: CATEGORY_ERROR,
        payload: err, 
    })
        
    }
}