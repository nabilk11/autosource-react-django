import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import prodReducers from './reducers/prodReducer';
import { cartReducer } from "./reducers/cartReducer";
import { loginReducer, registerReducer } from "./reducers/userReducer";

// Reducer
const reducer = combineReducers({
    allProducts: prodReducers,
    cart: cartReducer,
    login: loginReducer,
    register: registerReducer,
})
// Cart Data from Local Storage
const cartStored = localStorage.getItem('cartProds') ? JSON.parse(localStorage.getItem('cartProds')) : []


// userToken Data
const userTokenStored = localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null

// shipping address Data
const shippingAddressStored = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : { }


// Initial State
const initState = {
    cart: {
        cartProds: cartStored,
        shippingAddress: shippingAddressStored,
    },
    login: {userToken: userTokenStored },
    // register: {userToken: userTokenStored},
}
// Store Middleware
const middleware = [thunk]
// Create Store
export const store = createStore(reducer, initState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store


