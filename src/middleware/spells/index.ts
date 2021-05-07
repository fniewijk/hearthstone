import { AnyAction, Dispatch, Store } from 'redux'
import { SpellCardAction } from './types'
import { PlayerActionType, damagePlayerActionCreator } from '../../actions/player/index'
import { CardType, SpellCard, SpellCardProperty, SpellCardPropertyType, DamageSpellCardProperty } from '../../generic/types/index'



export default (store: Store) => (next: Dispatch<AnyAction>) => (action: AnyAction): void => {
	if (action.type !== PlayerActionType.PLAY_CARD && action.payload.card.type === CardType.SPELL) next(action)

	const spell = action as SpellCardAction
	const spellCard = spell.payload.card as SpellCard

	spellCard.properties.map((property: SpellCardProperty) => {
		execute(store, property)
	})

	next(action)
}


const execute = (store: Store, property: SpellCardProperty) => {

	switch (property.type) {
	case SpellCardPropertyType.DAMAGE:
	{
		const { amount, playerIndex } = property as DamageSpellCardProperty
		// check if target is valid
		store.dispatch(damagePlayerActionCreator(amount, playerIndex))
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
