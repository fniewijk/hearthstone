import { AnyAction } from 'redux'
import { Card } from '../../generic/types'

export enum PlayerActionType {
  DAMAGE = 'PLAYER_DAMAGE',
  MULLIGAN = 'PLAYER_MULLIGAN',
  NEW_GAME = 'PLAYER_NEW_GAME',
  PLAY_CARD = 'PLAYER_PLAY_CARD'
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

export interface PlayCardPlayerAction extends AnyAction {
  type: PlayerActionType.PLAY_CARD,
  payload: {
    handIndex: number,
    playerIndex: number,
    target?: {
      playerIndex?: number,
      minionIndex?: number
    }
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

export const playCardPlayerActionCreator = (handIndex: number, playerIndex: number, target?: { playerIndex?: number, minionIndex?: number } ) => {
	return {
		type: PlayerActionType.PLAY_CARD,
		payload: {
			handIndex,
			playerIndex,
			target
		}
	}
}