import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { playerOne, playerTwo } from './reducers'

const reducers = combineReducers([playerOne, playerTwo])
const enhancers = applyMiddleware()

const store: Store = createStore(reducers, enhancers)

console.log(store.getState())