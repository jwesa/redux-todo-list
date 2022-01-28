import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid';


function TodoInput() {
	let [name, setName] = useState();
	const dispatch = useDispatch();
	return (
		<div className="container">
			<h1>Todo Input</h1>
			<div className="row">
				<div className="col-9">
					<input
						onChange={(e) => setName(e.target.value)}
						value={name}
						type="text"
						className="col form-control" />
				</div>
				<div className="col-3">
					<button
						disabled={!name}

						// onKeyPress={} ADD TODO PRESSING ENTER
						
						onClick={() => {
						dispatch(addTodo(
							{
								id: uuid(),
								name: name
							}
						))
						setName('');
					}}
						className="btn btn-primary">Add</button>
				</div>
			</div>
		</div>
	)
}

export default TodoInput;