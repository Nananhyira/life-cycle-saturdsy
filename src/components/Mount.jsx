import React, { useState, useEffect } from "react";

function Mount() {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts").then((resolve) => {
			resolve.json().then((users) => {
				setStudents(users);
				console.log(users);
			});
		});
	}, [students.body]);
	return (
		<>
			<h1>posts</h1>
			{students.map((user) => {
				return (
					<div key={user.id}>
						<h1> name{user.body}</h1>
						<h1> name{user.title}</h1>
						<hr />
					</div>
				);
			})}
		</>
	);
}

export default Mount;
