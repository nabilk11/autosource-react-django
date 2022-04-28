// Convert Vars to Strings for Switch/Case
// User Login
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' 
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'

// User Register
export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_ERROR = 'REG_ERROR'

// User Details
export const DETAILS_START = 'DETAILS_START'
export const DETAILS_SUCCESS = 'DETAILS_SUCCESS'
export const DETAILS_ERROR = 'DETAILS_ERROR'


// LOGIN REDUCER
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



// REGISTER REDUCER
export const registerReducer = (state = { }, action) => {
    switch (action.type) {
        case REG_START:
            return { 
                loading: true, 
            }

        case REG_SUCCESS:
            return { 
                loading: false, 
                userToken: action.payload,
             }

        case REG_ERROR:
            return { 
                loading: false, 
                err: action.payload,
             }
        default:
            return state
    } 
}

// DETAILS REDUCER
export const detailsReducer = (state = {user:{} }, action) => {
    switch (action.type) {
        case DETAILS_START:
            return {
                ...state, 
                loading: true, 
            }

        case DETAILS_SUCCESS:
            return { 
                loading: false, 
                userToken: action.payload,
             }

        case DETAILS_ERROR:
            return { 
                loading: false, 
                err: action.payload,
             }
        default:
            return state
    } 
}
