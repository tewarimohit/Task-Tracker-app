import "./index.css";
import { useState } from "react";
import Header from "./header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
export default function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th",
			description:'For Regular checkup',
			remainder: true,
		},
		{
			id: 2,
			text: "Meeting at school",
			day: "Feb 6th",
			description:'For future Goals',
			remainder: true,
		},
		{
			id: 3,
			text: "Shopping",
			day: "Feb 7th",
			description:'Essential Items, Grocery',
			remainder: false,
		},
	]);

	// useEffect(() => {
	//   const fetchTasks = async () => {
	//     const res = await fetch("./db.json");
	//     const data = await res.json();
	//     console.log(data);
	//   };
	//   fetchTasks();
	// }, []);

	// Add Task
	const addTask = task => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
		
	};

	// Delete Task
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	// Toggle Remainder

	const toggleRemainder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, remainder: !task.remainder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>

			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
			) : (
				<h3>"No Tasks Remaining..."</h3>
			)}
		</div>
	);
}
