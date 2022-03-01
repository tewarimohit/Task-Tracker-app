import { useState } from "react";

const AddTask = prop => {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [remainder, setRemainder] = useState(false);

	const taskIs = event => setText(event.target.value);
	const dayIs = event => setDay(event.target.value);
	const remainderIs = event => setRemainder(event.currentTarget.checked);
	const onSubmit = event => {
		event.preventDefault();

		if (!text) {
			alert("Please Add a Task");
		}

		prop.onAdd({ text, day, remainder });
		setText("");
		setDay("");
		setRemainder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input
					type="text"
					placeholder="Add Task"
					value={text}
					onChange={taskIs}
				/>
			</div>

			<div className="form-control">
				<label>Day</label>
				<input type="text" placeholder="Add Day" value={day} onChange={dayIs} />
			</div>

			<div className="form-control form-control-check">
				<label>Set Remainder</label>
				<input
					type="checkbox"
					checked={remainder}
					value={remainder}
					onChange={remainderIs}
				/>
			</div>

			<input type="submit" value="Save" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
