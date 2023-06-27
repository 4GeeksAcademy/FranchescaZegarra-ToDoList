import React, { useState } from "react";
import Form from "./form.jsx";
import Task from "./task.jsx"

//create your first component

const Home = () => {
	const [tasks, setTasks] = useState([]);
	
	const addTask = (task) => {
		const actualTaks = [...tasks, task];
		setTasks(actualTaks);
	}
	const deleteTask = (id) => {
		const actualTaks = tasks.filter(task => task.id !== id);
		setTasks(actualTaks);
	}

	return (
		<div className="container mt-5 ">
			<div className="col-lg-6 col-sm-12 col-md-10 bg-light p-3 m-auto border">
				<Form onSubmit={addTask}/>
				{
					tasks.map((task) => (
						<Task key={task.id} id={task.id} text={task.text} deleteTask={deleteTask}/>
					))
				}
			</div>
		</div>
	);
};

export default Home;
