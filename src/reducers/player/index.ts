interface Action {
  type: string,
  payload: any;
}

enum PlayerActionType {
  NEW_GAME = 'NEW_GAME'
}

interface NewGamePlayerAction extends Action {
  type: PlayerActionType.NEW_GAME,
  payload: Card[]
}

enum CardType {
  MINION = 'MINION',
  SPELL = 'SPELL',
  HERO = 'HERO'
}

interface Card {
  manaCost: number
  type: CardType
}

interface Minion {
  id: number,
  health: number,
}

interface Player {
  health: number,
  mana: number,
  hand: Card[],
  deck: Card[],
  minions: Minion[],
}

const initialState: Player = {
  health: 30,
  mana: 0,
  hand: [],
  deck: [],
  minions: [],
}

export default (state: Player = initialState, action: Action): Player => {
  switch (action.type) {
  case PlayerActionType.NEW_GAME:
    return {
      ...initialState,
      deck: (action as NewGamePlayerAction).payload,
    }
  }
  return state
}
