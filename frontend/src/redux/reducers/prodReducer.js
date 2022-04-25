// Convert Vars to Strings for Switch/Case
export const PRODUCT_START = 'PRODUCT_START'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_ERROR = 'PRODUCT_FAILURE'

// Reducer for Products
const prodReducers = (state = {products:[] }, action) => {
    switch (action.type) {
        case PRODUCT_START:
            return { 
                loading: true, 
                products: [], 
            }

        case PRODUCT_SUCCESS:
            return { 
                loading: false, 
                products: action.payload,
             }

        case PRODUCT_ERROR:
            return { 
                loading: false, 
                err: action.payload,
             }

        default:
            return state
    } 
}



// Export Reducers
export default prodReducers