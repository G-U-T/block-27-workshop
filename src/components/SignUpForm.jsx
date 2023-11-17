import {React, useState} from "react";

const API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`;

const SignUpForm = () => {
	const [username, setUsername] = useState(``);
	const [password, setPassword] = useState(``);
	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					password,
				}),
			});
			const result = await response.json();
			console.log(result);
		}
		catch(err) {
			setError(err);
		}
	}

	return (
	<section>
		<h2>Sign Up</h2>
		{error && <p>{error}</p>}
		<form className="column-flex">
			<label className="row-flex">
				Username: <input value={username} onChange={(event) => {
					setUsername(event.target.value);
				}}/>
			</label>
			<label className="row-flex">
				Password: <input value={password} onChange={(event) => {
					setPassword(event.target.value);
				}}/>
			</label>
			<button onClick={(event) => {handleSubmit(event)}}>Submit</button>
		</form>
	</section>
	);
};

export default SignUpForm;