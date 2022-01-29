import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

function App() {
	return (
		<div className="container App">
			<TodoInput />
			<TodoList />
		</div>
	);
}

export default App;

