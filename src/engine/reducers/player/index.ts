import { AnyAction } from 'redux'
import { DamagePlayerAction, NewGamePlayerAction, PlayerActionType } from '../../actions'
import { PlayerState } from '../../generic/types'
import { pickFromDeck } from '../../utils'
import minionsReducer from '../minions'
import { MinionAction } from '../../actions/minions/index'

const initialState: PlayerState = {
	health: 30,
	mana: 0,
	hand: [],
	deck: [],
	minions: [],
}

export default (state: PlayerState = initialState, action: AnyAction): PlayerState => {
	switch (action.type) {
	case PlayerActionType.DAMAGE: {
		const typedAction: DamagePlayerAction = action as DamagePlayerAction
		return {
			...initialState,
			health: state.health - typedAction.payload.amount
		}
	}
	case PlayerActionType.NEW_GAME: {
		return {
			...initialState,
			deck: (action as NewGamePlayerAction).payload.deck,
		}
	}
	case PlayerActionType.MULLIGAN: {
		return {
			...state,
			chooseCards: pickFromDeck(state.deck, 3),
		}
	}
	}
	return {
		...state,
		minions: minionsReducer(state.minions, action as MinionAction)
	}
}
