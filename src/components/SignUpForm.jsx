import {React, useState} from "react";

const API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`;

const SignUpForm = ({token, setToken}) => {

	const [username, setUsername] = useState(``);
	const [password, setPassword] = useState(``);
	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			if (username === `` || password === ``) {
				setError(`Username and password cannot be empty.`);
				return;
			};

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
			setToken(result.token);
			setError(null);
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
				Username: <input required type="text" value={username} onChange={(event) => {
					setUsername(event.target.value);
				}}/>
			</label>
			<label className="row-flex">
				Password: <input required type="text" value={password} onChange={(event) => {
					setPassword(event.target.value);
				}}/>
			</label>
			<button onClick={(event) => {handleSubmit(event)}}>Submit</button>
		</form>
	</section>
	);
};

export default SignUpForm;