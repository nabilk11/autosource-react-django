// Convert Vars to Strings for Switch/Case
export const PRODUCT_REQ = 'PRODUCT_REQ'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE'

// Reducer for Products
const prodReducers = (state = {products:[] }, action) => {
    switch (action.type) {
        case PRODUCT_REQ:
            return { loading: true, products: [] }

        case PRODUCT_SUCCESS:
            return { loading: false, products: action.payload }

        case PRODUCT_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    } 
}



// Export Reducers
export default prodReducers