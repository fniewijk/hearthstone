import { AnyAction } from 'redux'
import gameReducer from './index'
import { GameState } from './index'
import { PlayerState } from '../../generic/types/index' 
import playerReducer from '../player'

jest.mock('../player', () => jest.fn().mockImplementation())

const mockState: GameState = {
	turn: 0,
	players: [
		{
			health: 1
		} as PlayerState,
		{
			health: 2
		} as PlayerState
	]
}

const mockAction: AnyAction = {
	type: 'mock',
	payload: {
		playerIndex: 1,
	}
}

const mockActionWithoutPlayerIndex: AnyAction = {
	type: 'mock'
}

test('only calls the reducer of the player which concerns the action', () => {
	gameReducer(mockState, mockAction)
	expect(playerReducer).toHaveBeenCalledWith(mockState.players[1], mockAction)
	expect(playerReducer).not.toHaveBeenCalledWith(mockState.players[0], mockAction)
})

test('calls all the reducers when there is no playerIndex in the action', () => {
	gameReducer(mockState, mockActionWithoutPlayerIndex)
	expect(playerReducer).toHaveBeenCalledWith(mockState.players[1], mockActionWithoutPlayerIndex)
	expect(playerReducer).toHaveBeenCalledWith(mockState.players[0], mockActionWithoutPlayerIndex)

})