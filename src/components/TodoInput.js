import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid';

import add from '../css/icons/plus-solid.svg';


function TodoInput() {
	const addIcon = <img src={add} alt="Add" height={20} weight={20} style={{ color: "white" }} />;

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
		<div className="row d-flex justify-content-center m-2 mt-5">
			<div className="align-self-start">
				<h1>Todo Input</h1>
			</div>
			<div className="col-8">
				<input
					className="col form-control"
					style = {{boxShadow: 0}} // УБРАТЬ ПРИ ФОКУСЕ АУТЛАЙН
					onChange={(e) => setName(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							handleAddTodo();
						}
					}}
					value={name}
					type="text"
				/>
			</div>
			<div className="col-4">
				<button
					disabled={!name}

					onClick={() => {
						handleAddTodo();
					}
					}
					className="btn btn-primary mx-2">{addIcon}</button>
			</div>
		</div>
	)
}

export default TodoInput;