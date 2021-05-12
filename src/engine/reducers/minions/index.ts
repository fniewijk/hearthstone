import { MinionAction, MinionActionType } from '../../actions'
import { Minion } from '../../generic/types'


export default (minions: Minion[], action: MinionAction): Minion[] => {

	switch(action.type){
	case MinionActionType.DAMAGE:
		{
			const newMinions = minions.concat()
			newMinions[action.payload.minionIndex].health -= action.payload.amount
			return newMinions
		}
		break
	}

	return minions
}