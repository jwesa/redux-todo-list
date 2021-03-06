import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actions'

const initialState = [];

export function reducer(state = initialState, action) {
	let newTodos = [];
	switch (action.type) {
		case ADD_TODO:
			newTodos = [...state];
			newTodos.push(action.payload);
			return newTodos;
		case REMOVE_TODO:
			newTodos = [...state];
			newTodos = newTodos.filter(todo => todo.id !== action.payload);
			return newTodos;
		case UPDATE_TODO:
			newTodos = [...state];
			let index = -1;
			for (let i = 0; i < newTodos.length; i++) {
				index++;
				if (newTodos[i].id === action.payload.id) {
					break;
				}
				
			}
			if (index !== -1) {
				newTodos[index] = action.payload;
				return newTodos;
			}
			break;
		default:
			return state;
	}
}