import { 
    LOGIN_ERROR, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGOUT } from "../reducers/userReducer";
import axios from 'axios';


export const loginCall = (email, password) => async (dispatch) => {

    try {
        dispatch({
            type: LOGIN_START
        })
        const headers = {'Content-Type': 'application/json'}

        const res = await axios.post('/api/users/login/', {
            'username': email, 'password': password,
        },
        {headers: headers}
        )
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        localStorage.setItem('userToken', JSON.stringify(res.data.access))
        // add error handling
    } catch (err) {
        dispatch({
        type: LOGIN_ERROR,
        payload: err, 
    })   
    }   
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userToken')
    dispatch({
        type: LOGOUT
    })
}