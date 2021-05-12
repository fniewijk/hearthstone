
export enum MinionActionType {
  DAMAGE = 'MINION_DAMAGE'
}

export interface DamageMinionAction {
  type: MinionActionType.DAMAGE,
  payload: {
    amount: number,
    minionIndex: number,
    playerIndex: number
  }
}

export type MinionAction = DamageMinionAction

