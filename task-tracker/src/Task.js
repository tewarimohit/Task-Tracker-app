import { FaTimes } from "react-icons/fa";

const Task = prop => {
	const callDelete = () => prop.onDelete(prop.task.id);
	const callToggle = () => prop.onToggle(prop.task.id);
	return (
		<div
			className={`task ${prop.task.remainder ? "remainder" : ""}`}
			onDoubleClick={callToggle}
		>
			<h3>
				{prop.task.text}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={callDelete}
				/>
			</h3>
			<p>{prop.task.day}</p>
			<p>{`Description - ${prop.task.description}`}</p>
		</div>
	);
};

export default Task;
