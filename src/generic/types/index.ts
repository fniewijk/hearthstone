
export enum CardType {
  MINION = 'MINION',
  SPELL = 'SPELL',
  HERO = 'HERO',
  WEAPON = 'WEAPON'
}

// TODO move minions to other file

export enum MinionCardPropertyType {
  BATTLE_CRY,
  DEATH_RATTLE
}

export interface BattlecryMinionCardProperty {
  type: MinionCardPropertyType.BATTLE_CRY,
  properties: CardProperty[]
}

export interface DeathrattleMinionCardProperty {
  type: MinionCardPropertyType.DEATH_RATTLE,
  properties: CardProperty[]
}

export type MinionCardProperty = BattlecryMinionCardProperty | DeathrattleMinionCardProperty

// TODO move spell cards to other file

export enum SpellCardPropertyType {
  DAMAGE,
  DRAW_CARDS
}

export interface DamageSpellCardProperty {
  type: SpellCardPropertyType.DAMAGE,
  amount: number,
  playerIndex: number,
}

export interface DrawCardsSpellCardProperty {
  type: SpellCardPropertyType.DRAW_CARDS,
  amount: number
}

export type SpellCardProperty = DamageSpellCardProperty | DrawCardsSpellCardProperty

export type CardProperty = MinionCardProperty | SpellCardProperty

// move basecard away to own file

export interface BaseCard {
  manaCost: number
  type: CardType
  properties: CardProperty[]
}

export interface MinionCard extends BaseCard {
  type: CardType.MINION
}

export interface SpellCard extends BaseCard {
  type: CardType.SPELL
  properties: SpellCardProperty[]
}

export interface HeroCard extends BaseCard {
  type: CardType.HERO
} 

export interface WeaponCard extends BaseCard {
  type: CardType.WEAPON
}

export type Card = SpellCard | MinionCard | HeroCard | WeaponCard

// move minion and player to own file

export interface Minion {
  id: number,
  health: number,
}

export interface PlayerState {
  health: number,
  mana: number,
  hand: Card[],
  deck: Card[],
  minions: Minion[],
  chooseCards?: Card[],
}