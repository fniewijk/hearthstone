import { PlayerState } from '../../generic/types'
import { AnyAction } from 'redux'
import playerReducer from '../player'
import { AddPlayersGameAction, GameActionType } from '../../actions'

export interface GameState {
  players: PlayerState[],
  turn: number,
}

const initialState = {
	players: [],
	turn: 0,
}

export default (state: GameState = initialState, action: AnyAction): GameState => {

	switch(action.type){
	case GameActionType.ADD_PLAYERS: {
		const addPlayersAction = action as AddPlayersGameAction
		const returnState: GameState = { ...state }
		for(let i = 0; i < addPlayersAction.payload.amount; i++) {
			returnState.players.push(playerReducer(undefined, addPlayersAction))
		}
	}
	}

	return {
		...state,
		players: state.players.map((player: PlayerState, index: number) => {
			// Only calls the reducer for the player that the action is for. Is this right?
			// It prevents from having to manage the player indices.
			if (action.payload?.playerIndex && action.payload?.playerIndex !== index) {
				return player
			}
			return playerReducer(player, action)
		})
	}
}