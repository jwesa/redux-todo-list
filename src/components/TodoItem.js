import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from '../redux/actions'

function TodoItem({ todo }) {
	const dispatch = useDispatch();
	return (
		<div className="container">
			<div className="row align-items-center m-2">
				<div className="col-4">#{todo.id}</div>
				<div className="col-4">
					<h5>{todo.name}</h5>
				</div>
				<span className="col-4">
					<button className="btn btn-primary">Edit</button>
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