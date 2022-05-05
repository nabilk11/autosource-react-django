export const CATEGORY_START = 'CATEGORY_START'
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS' 
export const CATEGORY_ERROR = 'CATEGORY_ERROR'


export const categoryReducer = (state = {products:[] }, action) => {
    switch (action.type) {
        case CATEGORY_START:
            return { 
                loading: true, 
                products: [], 
            }



        case CATEGORY_SUCCESS:
            return { 
                loading: false, 
                products: action.payload,
             }

        case CATEGORY_ERROR:
            return { 
                loading: false, 
                err: action.payload,
             }

        default:
            return state
    } 
}