import React from "react";
import Form from "./form.jsx";
import Task from "./task.jsx"

//create your first component

const Home = () => {
	return (
		<div className="container mt-5 ">
			<div className="col-lg-6 col-sm-12 col-md-10 bg-light p-3 m-auto border">
				<Form />
				<Task text="Hola mundo" />
			</div>
			
		</div>
	);
};

export default Home;
