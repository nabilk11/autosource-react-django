// Convert Vars to Strings for Switch/Case
// User Login
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'


// USER REDUCER
export const loginReducer = (state = { }, action) => {
    switch (action.type) {
        case LOGIN_START:
            return { 
                loading: true, 
             
            }

        case LOGIN_SUCCESS:
            return { 
                loading: false, 
                userToken: action.payload,
             }

        case LOGIN_ERROR:
            return { 
                loading: false, 
                err: action.payload,
             }
        case LOGOUT:
            return { }

        default:
            return state
    } 
}

