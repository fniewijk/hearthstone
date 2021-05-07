import minionsReducer from './index'
import { Minion } from '../../generic/types/index'
import { MinionAction, MinionActionType } from '../../actions'

const mockMinions: Minion[] = [
  { health: 9 } as Minion,
  { health: 10 } as Minion
]

const mockAction: MinionAction = {
	type: MinionActionType.DAMAGE,
	payload: {
		amount: 5,
		minionIndex: 1
	}
} as MinionAction

test('damage a minion in the array', () => {
	expect(minionsReducer(mockMinions, mockAction)).toStrictEqual([
		{ health: 9 },
		{ health: 5 }
	])
})