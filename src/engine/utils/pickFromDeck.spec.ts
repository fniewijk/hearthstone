import { Card, CardType } from '../generic/types'
import pickFromDeck from './pickFromDeck'

const cards = [
	{
		type: CardType.MINION,
	},
	{
		type: CardType.SPELL,
	},
	{
		type: CardType.SPELL,
	},
	{
		type: CardType.SPELL,
	}
] as Card[]

const oneCardList = [cards[0]]
const twoCardsList = [cards[0], cards[1]]
const threeCardsList = [cards[0], cards[1], cards[2]]

test('empty list', () => {
	expect(pickFromDeck([], 0)).toStrictEqual([])
})

test('list with 1 card and request 0', () => {
	expect(pickFromDeck(oneCardList, 0)).toStrictEqual([])
})

test('list with 1 card and request 3', () => {
	expect(pickFromDeck(oneCardList, 3)).toStrictEqual(oneCardList)
})

test('list with 2 cards and request 3', () => {
	expect(pickFromDeck(twoCardsList, 3)).toStrictEqual(twoCardsList)
})

test('list with 3 cards and request 3', () => {
	expect(pickFromDeck(threeCardsList, 3)).toStrictEqual(threeCardsList)
})

test('list with 4 cards and request 3', () => {
	expect(pickFromDeck(cards, 3)).toStrictEqual(threeCardsList)
})

test('immutable', () => {
	const newCards: Card[] = cards.concat()
	pickFromDeck(newCards, 3)

	expect(newCards.length).toStrictEqual(cards.length)
})