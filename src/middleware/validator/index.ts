import { AnyAction, Dispatch } from 'redux'


export default () => (next: Dispatch<AnyAction>) => (action: AnyAction): void => {
	next(action)
}