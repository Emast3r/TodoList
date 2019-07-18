import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import logger from 'redux-logger'
let middleware = [thunk];
if (__DEV__) {
    const reduxInmmutableStateInvariant = require('redux-immutable-state-invariant').default();
    middleware = [...middleware, reduxInmmutableStateInvariant, logger]
} else {
    middleware = [...middleware]
}

export default Store = (initialState) =>{
    return createStore(
        reducers,
        initialState,
        applyMiddleware(...middleware)
    )
}
