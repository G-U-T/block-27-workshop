import {React, useState} from "react";

const API_URL = `https://fsa-jwt-practice.herokuapp.com/authenticate`;

const Authenticate = ({token, setToken}) => {

	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

	const handleClick = async () => {
		try {
			const response = await fetch(API_URL, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
			});
			const result = await response.json();
			setSuccessMessage(result.message);
		}
		catch(err) {
			setError(err.message);
		}
	};

	return (<>
		<h2>Authenticate</h2>
		{successMessage && <p>{successMessage}</p>}
		{error && <p>{error}</p>}
		<button onClick={handleClick}>Authenticate Token</button>
	</>);
};

export default Authenticate;