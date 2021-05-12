import { AnyAction, Dispatch, MiddlewareAPI } from 'redux'
import { GameActionType, NewGameAction, addPlayersGameActionCreator, newGamePlayerActionCreator } from '../../actions'
import { Card } from '../../generic/types'
import { PlayerActionType } from '../../actions/player/index'
import { GameState } from '../../reducers/game'
import { randomizeArray } from '../../utils'

export default (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction): AnyAction => {

	switch (action.type) {
	case GameActionType.NEW_GAME:
	{
		const newGameAction: NewGameAction = (action as NewGameAction)
		api.dispatch(addPlayersGameActionCreator(newGameAction.payload.decks.length))
    
		newGameAction.payload.decks.map((deck: Card[], index: number) => {
			api.dispatch(newGamePlayerActionCreator(randomizeArray(deck), index))
		})
		break
	}
	case PlayerActionType.PLAY_CARD: {
		// const state: GameState = api.getState()
		// const playCardAction: PlayCardAction = action

		// check that it is the players turn (turn % players.length === 0)
		// check that the card exists in the hand
		// check that there is enough mana
		// check that the target is correct
    

		break
	}
	default:
		// need default?
		// throw error?
		break
	}


	return next(action)
}