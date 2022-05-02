export const ADD_ORDER_START = 'ADD_ORDER_START' 
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS' 
export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR' 

export const ORDER_RESET = 'ORDER_RESET' 

export const USER_ORDER_START = 'USER_ORDER_START'
export const USER_ORDER_SUCCESS = 'USER_ORDER_SUCCESS'
export const USER_ORDER_ERROR = 'USER_ORDER_ERROR'
export const USER_ORDER_RESET = 'USER_ORDER_RESET'



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


export const orderListReducer = (state={orders:[]},action) => {
    switch(action.type) {
        case USER_ORDER_START:
            return {
                loading:true,
            }
        case USER_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
                message: 'Success',

            }
        case USER_ORDER_ERROR:
            return {
                loading:false,
                err: action.payload,
            }
        case USER_ORDER_RESET:
            return {
                orders: []
            }

        default:
            return state
    }
}