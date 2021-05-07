export interface Minion {
  id: number,
  health: number,
}

export interface Player {
  health: number,
  mana: number,
  hand: Card[],
  deck: Card[],
  minions: Minion[],
}