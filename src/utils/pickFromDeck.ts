import { Card } from '../generic/types'

export default (deck: Card[], amount: number):Card[] =>  {
	return deck.slice(0, amount)
}