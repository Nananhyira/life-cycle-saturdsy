import React, { Component } from "react";

class File extends Component {
	constructor(props) {
		super();
		this.state = { students: [] };
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				res.json().then((users) => {
					console.log(users);
					this.setState({ students: users });
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<>
				{this.state.students.map((item, index) => {
					return (
						<div key={index}>
							<h1>Name:{item.name}</h1>
							<h1>username: {item.username}</h1>
							<h1>phone:{item.phone}</h1>
							<h1>website:{item.website}</h1>
							<hr></hr>
						</div>
					);
				})}
			</>
		);
	}
}
export default File;
