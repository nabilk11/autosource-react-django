export const ADD_ORDER_START = 'ADD_ORDER_START' 
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS' 
export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR' 



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
        default:
            return state
    }
}