import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid';

import add from '../css/icons/plus-solid.svg';


function TodoInput() {
	const addIcon = <img src={add} alt="Add" height={20} weight={20} style={{color: "white"}}/>;

	let [name, setName] = useState();
	const dispatch = useDispatch();
	const handleAddTodo = () => {
		dispatch(addTodo(
			{
				id: uuid(),
				name: name
			}
		));
		setName('');
	}
	return (
		<div className="container">
			<h1>Todo Input</h1>
			<div className="row">
				<div className="col-9">
					<input
						onChange={(e) => setName(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === 'Enter') {
								handleAddTodo();
							}
						}}
						value={name}
						type="text"
						className="col form-control" />
				</div>
				<div className="col-3">
					<button
						disabled={!name}

						onClick={() => {
							handleAddTodo();
						}
						}
						className="btn btn-primary">{addIcon}</button>
				</div>
			</div>
		</div>
	)
}

export default TodoInput;