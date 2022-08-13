import React, { useState, useEffect } from "react";
import axios from "axios";

function Axi() {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
			setStudents(users.data);
			console.log(users.data);
		});
	}, []);

	return (
		<>
			<h1>posts</h1>
			{students.map((item) => {
				return (
					<div key={item.id} className>
						<h1>Name:{item.name}</h1>
						<h1>username: {item.username}</h1>
						<h1>phone:{item.phone}</h1>
						<h1>website:{item.website}</h1>
					</div>
				);
			})}
		</>
	);
}

export default Axi;
