import { 
    LOGIN_ERROR, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGOUT,
REG_ERROR, REG_START, REG_SUCCESS, DETAILS_ERROR, DETAILS_START, DETAILS_SUCCESS, UPDATE_ERROR, UPDATE_START, UPDATE_SUCCESS } from "../reducers/userReducer";
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
    window.location.reload()
    dispatch({
        type: LOGOUT
    })
}

export const registerCall = (name, email, password) => async (dispatch) => {

    try {
        dispatch({
            type: REG_START
        })
        const headers = {'Content-Type': 'application/json'}

        const res = await axios.post('/api/users/register/', {
            'name': name, 'email': email, 'password': password,
        },
        {headers: headers}
        )
        dispatch({
            type: REG_SUCCESS,
            payload: res.data
        })
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        localStorage.setItem('userToken', JSON.stringify(res.data))
        // add error handling
    } catch (err) {
        dispatch({
        type: REG_ERROR,
        payload: err, 
    })   
    }   
}


export const detailsCall = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: DETAILS_START
        })

        // getting token from redux state of logged in user
        const {
            login: {userToken} 
        } = getState()

        // headers with Bearer Token
        const headers = {'Content-Type': 'application/json',
                        Authorization: `Bearer ${userToken.access}`}

        const res = await axios.get(`/api/users/${id}/`,
        {headers: headers}
        )
        dispatch({
            type: DETAILS_SUCCESS,
            payload: res.data
        })
       
    } catch (err) {
        dispatch({
        type: DETAILS_ERROR,
        payload: err, 
    })   
    }   
}



export const updateCall = (user) => async (dispatch, getState) => {

    try {
        dispatch({
            type: UPDATE_START
        })

        // getting token from redux state of logged in user
        const {
            login: {userToken} 
        } = getState()

        // headers with Bearer Token
        const headers = {'Content-Type': 'application/json',
                        Authorization: `Bearer ${userToken.access}`}

        const res = await axios.get(`/api/users/profile/update/`,
        {headers: headers}
        )
        dispatch({
            type: UPDATE_SUCCESS,
            payload: res.data
        })

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        localStorage.setItem('userToken', JSON.stringify(res.data))
    } catch (err) {
        dispatch({
        type: UPDATE_ERROR,
        payload: err, 
    })   
    }   
}