import React from "react";

function TodoItem() {
	return (
		<div className="container">
			<div className="row align-items-center m-2">
				<div className="col-4">#1</div>
				<div className="col-4">
					<h5>ToDo Title</h5>
				</div>
				<span className="col-4">
					<button className="btn btn-primary ">Edit</button>
					<button className="btn btn-danger ml-3">Delete</button>
				</span>

			</div>
		</div>
	)
}

export default TodoItem;