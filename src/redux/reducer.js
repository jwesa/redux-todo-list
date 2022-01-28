import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actions'
import { todos } from './states';

export const reducer = (state = todos, action) => {
	switch (action.type) {
		case ADD_TODO:
			break;
		case UPDATE_TODO:
			break;
		case REMOVE_TODO:
			break;
		default:
			return state;
	}
}