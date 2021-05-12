import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { spells, validator } from './engine/middleware'
import { game } from './engine/reducers'
import { CardType } from './engine/generic/types'
import { newGameActionCreator } from './engine/actions/game/index'

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