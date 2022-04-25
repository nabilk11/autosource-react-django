import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import prodReducers from './reducers/prodReducer';
import { cartReducer } from "./reducers/cartReducers";

// Reducer
const reducer = combineReducers({
    allProducts: prodReducers,
    cart: cartReducer,

})
// Initial State
const initState = {}
// Store Middleware
const middleware = [thunk]
// Create Store
export const store = createStore(reducer, initState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store


