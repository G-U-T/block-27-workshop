import './App.css'
import './custom-styling.css'
import {React, useState} from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

function App() {

	const [token, setToken] = useState(null);

	return (
	<>
		<SignUpForm token={token} setToken={setToken}></SignUpForm>
		<br/><br/><br/>
		<Authenticate token={token} setToken={setToken}></Authenticate>
	</>
	);
}

export default App;
