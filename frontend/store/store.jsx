import  { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/root_reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


export default (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
)

// preloadedstate is {user: window.currentUser} - add this back in after successfully 
// starting project

