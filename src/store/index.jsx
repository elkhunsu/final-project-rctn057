import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import movie from './movie'

const combinedReducers = combineReducers({ movie })

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store;