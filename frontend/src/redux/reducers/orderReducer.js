export const ADD_ORDER_START = 'ADD_ORDER_START' 
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS' 
export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR' 

export const ORDER_RESET = 'ORDER_RESET' 

export const ORDER_DETAILS_START = 'ORDER_DETAILS_START'
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS'
export const ORDER_DETAILS_ERROR = 'ORDER_DETAILS_ERROR'



export const orderReducer = (state={}, action) => {
    switch(action.type) {
        case ADD_ORDER_START:
            return {
                loading:true,
            }
        case ADD_ORDER_SUCCESS:
            return {
                loading: false,
                message: 'Success!',
                order: action.payload,

            }
        case ADD_ORDER_ERROR:
            return {
                loading:false,
                err: action.payload,
            }

        case ORDER_RESET:
            return { }
        default:
            return state
    }
}


export const orderDetailsReducer = (state={loading:true, orderProds:[], shippingAddress: {}}, action) => {
    switch(action.type) {
        case ORDER_DETAILS_START:
            return {
                ...state,
                loading:true,
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload,

            }
        case ORDER_DETAILS_ERROR:
            return {
                loading:false,
                err: action.payload,
            }

        default:
            return state
    }
}