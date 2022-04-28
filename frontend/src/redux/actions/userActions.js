import { 
    LOGIN_ERROR, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGOUT,
REG_ERROR, REG_START, REG_SUCCESS } from "../reducers/userReducer";
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
        localStorage.setItem('userToken', JSON.stringify(res.data))
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

export const registerCall = (firstName, lastName, email, password) => async (dispatch) => {

    try {
        dispatch({
            type: REG_START
        })
        const headers = {'Content-Type': 'application/json'}

        const res = await axios.post('/api/users/register/', {
            'first_name': firstName,'last_name': lastName, 'email': email, 'password': password,
        },
        {headers: headers}
        )
        dispatch({
            type: REG_SUCCESS,
            payload: res
        })
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res
        })
        localStorage.setItem('userToken', JSON.stringify(res))
        // add error handling
    } catch (err) {
        dispatch({
        type: REG_ERROR,
        payload: err, 
    })   
    }   
}