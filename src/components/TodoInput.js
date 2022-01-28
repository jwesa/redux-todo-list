import React from "react";
import { useState } from 'react';
import { addTodo } from '../redux/actions'

function TodoInput() {
	let [name, setName] = useState();
	return (
		<div className="container mt-30">
			<h1>Todo Input</h1>
			<div className="row">
				<div className="col-9">
					<input
						onChange={(e)=>setName(e.target.value)}
						value={name}
						type="text"
						className="col form-control" />
				</div>
				<div className="col-3">
					<button onClick={() => addTodo({
						id: 34,
						name: name
					}
					)}
						className="btn btn-primary">Add</button>
				</div>
			</div>
		</div>
	)
}

export default TodoInput;