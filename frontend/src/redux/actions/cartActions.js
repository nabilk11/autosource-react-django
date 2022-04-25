import { CART_ERROR, 
    ADD_TO_CART, 
    REMOVE_FROM_CART } from "../reducers/cartReducer";
import axios from 'axios';

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