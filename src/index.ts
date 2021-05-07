import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { spells, validator } from './middleware'
import { game } from './reducers'
import { CardType } from './generic/types'
import { newGameActionCreator } from './actions/game/index'

const reducers = combineReducers([game])
const enhancers = applyMiddleware(
	validator,
	spells
)

const store: Store = createStore(reducers, enhancers)

store.dispatch(newGameActionCreator([ 
	[{ 
		type: CardType.MINION,
		manaCost: 1,
		properties: []
	}], 
	[]
]))

console.log(JSON.stringify(store.getState()))