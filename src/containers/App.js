import React from "react";
import TodoInput from "../components/TodoInput";
// import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";

import '../index.css'

function App() {
	return (
		<div className="App">
			<TodoInput />
			<TodoList />
		</div>
	);
}

export default App;

