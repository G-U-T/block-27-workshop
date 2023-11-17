import {React, useState} from "react";

const API_URL = `https://fsa-jwt-practice.herokuapp.com/authenticate`;
const SUCCESS = `Correctly Authenticated!`;

const Authenticate = ({token, setToken}) => {

	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);
	const [successData, setSuccessData] = useState(null);

	const handleClick = async () => {
		try {
			if (token === null) {
				setError(`You don't have a token.`);
				return;
			}

			const response = await fetch(API_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
			});
			const result = await response.json();
			setSuccessMessage(result.message);
			setSuccessData(result.data);
			setError(null);
		}
		catch(err) {
			setError(err.message);
		}
	};

	return (<>
		<h2>Authenticate</h2>
		{
			successMessage === SUCCESS && 
			<div className="row-flex">
				<p>{successMessage}</p>
				<p>You are logged in as: {successData.username}</p>
			</div>
		}
		{error && <p>{error}</p>}
		<button onClick={handleClick}>Authenticate Token</button>
	</>);
};

export default Authenticate;