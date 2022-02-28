import Task from "./Task";

const Tasks = props => {
	return (
		<>
			{props.tasks.map(item => (
				<Task
					key={item.id}
					task={item}
					onDelete={props.onDelete}
					onToggle={props.onToggle}
				/>
			))}
		</>
	);
};

export default Tasks;
