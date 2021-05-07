import { AnyAction } from 'redux'
import { NewGamePlayerAction, PlayerActionType } from '../../actions/player'
import { Player } from '../../generic/types'
import { pickFromDeck, randomizeArray } from '../../utils'
import { DamagePlayerAction } from '../../actions/player/index'

const initialState: Player = {
	health: 30,
	mana: 0,
	hand: [],
	deck: [],
	minions: [],
	chooseCards: [],
}

export default (state: Player = initialState, action: AnyAction): Player => {
	switch (action.type) {
	case PlayerActionType.DAMAGE: {
		const typedAction: DamagePlayerAction = action as DamagePlayerAction
		// TODO check for right player
		return {
			...initialState,
			health: state.health - typedAction.payload.amount
		}
	}
		
	case PlayerActionType.NEW_GAME:{
		// TODO check for right player
		return {
			...initialState,
			deck: randomizeArray((action as NewGamePlayerAction).payload.deck),
		}
	}
	case PlayerActionType.MULLIGAN:{
		return {
			...state,
			chooseCards: pickFromDeck(state.deck, 3),
		}
	}
	}
	return state
}
