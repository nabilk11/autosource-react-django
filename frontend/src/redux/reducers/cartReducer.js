// Convert Vars to Strings for Switch/Case
// Cart Items
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CART_ERROR = 'CART_ERROR'

// Add Shipping Address
export const ADD_SHIPPING = 'ADD_SHIPPING'


export const cartReducer = (state = { cartProds:[], shippingAddress : { } }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const duplicate = state.cartProds.find(c => c.product === (action.payload).product)
            if (duplicate) {
                return{
                    ...state,
                    cartProds: state.cartProds.map(i => i.product === duplicate.product ? action.payload : i)
                }
            } else {
                return{
                    ...state,
                    cartProds:[...state.cartProds, (action.payload)]
                }
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartProds:state.cartProds.filter(p => p.product !== action.payload)
            }

        case ADD_SHIPPING:
            return{
                ...state,
                shippingAddress: action.payload,
            }
        default:
            return state

    }
}

