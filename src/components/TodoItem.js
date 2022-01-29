import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../redux/actions';

import edit from '../css/icons/edit-regular.svg';
import update from '../css/icons/save-regular.svg'
import remove from '../css/icons/trash-alt-regular.svg';

function TodoItem({ todo }) {
	const editIcon = <img src={edit} alt="Edit" height={20} weight={20} />;
	const deleteIcon = <img src={remove} alt="Delete" height={20} weight={20} />;
	const updateIcon = <img src={update} alt="Update" height={20} weight={20} />;


	const [editable, setEditable] = useState(false);
	const [name, setName] = useState(todo.name);
	const dispatch = useDispatch();
	return (
		<div className="row mx-2 d-flex align-items-center m-2">
			<div className="col-7  mt-3 mb-2">
				<h5>{editable ? <input type="text" className="form-control"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/> : todo.name}</h5>
			</div>
			<div className="col-4">
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
							setName(name); //setName(todo.name) сбрасывало на предыдущий стейт после эдита.
						}
						setEditable(!editable)
					}}>{editable ? updateIcon : editIcon}</button>
				<button
					className="btn btn-danger offset-1"
					onClick={() => dispatch(removeTodo(todo.id))} >
					{deleteIcon}
				</button>
			</div>
		</div>
	)
}

export default TodoItem;