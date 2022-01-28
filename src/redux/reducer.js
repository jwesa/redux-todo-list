import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actions'
import { todos } from './states';

export function reducer(state = todos, action) {
	switch (action.type) {
		case ADD_TODO:
			break;
		case UPDATE_TODO:
			break;
		case REMOVE_TODO:
			let newTodos = [...state];
			newTodos = newTodos.filter(todo => todo.id !== action.payload)
			return newTodos;

		default:
			return state;
	}
}