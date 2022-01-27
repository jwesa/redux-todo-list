import React from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";

function App() {
	return (
		<div className="App">
			<TodoInput />
			<TodoList />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</div>
	);
}

export default App;

