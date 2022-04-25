// Convert Vars to Strings for Switch/Case
// Cart Items
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CART_ERROR = 'CART_ERROR'

export const cartReducer = (state = { cartProds:[] }, action) => {
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
        // case REMOVE_FROM_CART:
        //     const exists = state.cartProds.find(c => c.product === (action.payload).product)
        //     if (exists) {

        //     } else {
                
        //     }
        default:
            return state

    }
}
export default cartReducer