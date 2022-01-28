import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../redux/actions'


function TodoItem({ todo }) {
	const [editable, setEditable] = useState(false);
	const [name, setName] = useState(todo.name);
	const dispatch = useDispatch();
	return (
		<div className="container">
			<div className="row align-items-center m-2">
				{/* <div className="col-4">#{todo.id.length > 1 ? todo.id[2] : todo.id}</div> */}
				<div className="col-4">
					<h5>{editable ? <input type="text" className="form-control"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/> : todo.name}</h5>
				</div>
				<span className="col-4">
					<button
						className="btn btn-primary"
						onClick={() => {
							dispatch(updateTodo(
								{
									...todo,
									name: name,
								}
							));
							if (editable) {
								setName(todo.name);
							}
							setEditable(!editable)
						}}>{editable ? 'Update' : 'Edit'}</button>
					<button
						className="btn btn-danger"
						onClick={() => dispatch(removeTodo(todo.id))} >
						Delete
					</button>
				</span>
			</div>
		</div>
	)
}

export default TodoItem;