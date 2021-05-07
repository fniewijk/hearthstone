import { AnyAction, Dispatch, MiddlewareAPI } from 'redux'
import { SpellCardAction } from './types'
import { PlayerActionType, damagePlayerActionCreator } from '../../actions/player/index'
import { CardType, SpellCard, SpellCardProperty, SpellCardPropertyType, DamageSpellCardProperty } from '../../generic/types/index'

export default (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction): AnyAction => {

	if (!(action.type === PlayerActionType.PLAY_CARD && action.payload.card.type === CardType.SPELL)) {
		return next(action)
	}
	const spell = action as SpellCardAction
	const spellCard = spell.payload.card as SpellCard

	spellCard.properties.map((property: SpellCardProperty) => {
		execute(api, property)
	})

	return next(action)
}

const execute = (api: MiddlewareAPI, property: SpellCardProperty) => {

	switch (property.type) {
	case SpellCardPropertyType.DAMAGE:
	{
		const { amount, playerIndex } = property as DamageSpellCardProperty
		// check if target is valid
		api.dispatch(damagePlayerActionCreator(amount, playerIndex))
		// check if it kills any players?
		// or check that outside of this.

		break
	}
	default:
		// need default?
		// throw error?
		break
	}

}
