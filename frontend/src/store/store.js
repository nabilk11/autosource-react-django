import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducer
const reducer = combineReducers({})
// Initial State
const initState = {}
// Store Middleware
const middleware = [thunk]
// Create Store
export const store = createStore(reducer, initState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store


