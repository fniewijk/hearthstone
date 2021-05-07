import { SpellCard } from '../../generic/types/index'

export interface SpellCardAction {
  type: string,
  payload: {
    card: SpellCard,
    target: number,
  }
}