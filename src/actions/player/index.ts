import { AnyAction } from 'redux'
import { Card } from '../../generic/types'

export enum PlayerActionType {
  DAMAGE = 'DAMAGE',
  MULLIGAN = 'MULLIGAN',
  NEW_GAME = 'NEW_GAME',
  PLAY_CARD = 'PLAY_CARD'
}

export interface DamagePlayerAction {
  type: PlayerActionType.DAMAGE,
  payload: {
    amount: number,
    playerIndex: number,
  }
}

export interface NewGamePlayerAction extends AnyAction {
  type: PlayerActionType.NEW_GAME,
  payload: {
    deck: Card[],
    playerIndex: number
  }
}


export const damagePlayerActionCreator = (amount: number, playerIndex: number): DamagePlayerAction => {
	return {
		type: PlayerActionType.DAMAGE,
		payload: {
			amount,
			playerIndex
		}
	}
}

export const newGamePlayerActionCreator = (deck: Card[], playerIndex: number): NewGamePlayerAction => {
	return {
		type: PlayerActionType.NEW_GAME,
		payload: {
			deck,
			playerIndex
		}
	}
}