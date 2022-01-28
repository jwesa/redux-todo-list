import React from "react";

function TodoInput() {
	return (
		<div className="container mt-30">
			<h1>Todo Input</h1>
			<div className="row">
				<div className="col-9">
					<input type="text" className="col form-control" />
				</div>
				<div className="col-3">
					<button className="btn btn-primary">Add</button>
				</div>
			</div>
		</div>
	)
}

export default TodoInput;