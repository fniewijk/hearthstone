import { Card } from '../../generic/types'

export enum GameActionType {
  NEW_GAME = 'NEW_GAME',
  ADD_PLAYERS = 'ADD_PLAYERS'
}

export interface AddPlayersGameAction {
  type: GameActionType.ADD_PLAYERS,
  payload: {
    amount: number
  }
}

export interface NewGameAction {
  type: GameActionType.NEW_GAME,
  payload: {
    decks: Card[][],
  }
}

export type GameAction = AddPlayersGameAction | NewGameAction

export const addPlayersGameActionCreator = (amount: number): AddPlayersGameAction => {
	return {
		type: GameActionType.ADD_PLAYERS,
		payload: {
			amount
		}
	}
}

export const newGameActionCreator = (decks: Card[][]): NewGameAction => {
	return {
		type: GameActionType.NEW_GAME,
		payload: {
			decks
		}
	}
}