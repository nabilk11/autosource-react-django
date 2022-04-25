import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import prodReducers from './reducers/prodReducer';
import { cartReducer } from "./reducers/cartReducer";

// Reducer
const reducer = combineReducers({
    allProducts: prodReducers,
    cart: cartReducer,
})
// Cart Data from Local Storage
const cartStored = localStorage.getItem('cartProds') ? JSON.parse(localStorage.getItem('cartProds')): []

// Initial State
const initState = {
    cart: {
        cartProds: cartStored,
    }
}
// Store Middleware
const middleware = [thunk]
// Create Store
export const store = createStore(reducer, initState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store


