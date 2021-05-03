import { AnyAction, Dispatch, Store } from 'redux'

interface SpellCardAction {
  type: string,
  payload: {
    card: any,
    target: number,
  }
}

export default (store: Store) => (next: Dispatch<AnyAction>) => (action: AnyAction): void => {
  if (action.type !== 'SPELL') next(action)

  const spell = action as SpellCardAction

  switch (spell.payload.card.type) {
  case 'FIREBALL':
    // check if target is valid
    store.dispatch({
      type: 'hurt something',
      payload: {
        target: spell.payload.target,
      },
    })
    // check if it kills any players?
    // or check that outside of this.
    next(action)
    break
  default:
    // need default?
    // throw error?
    break
  }
}
