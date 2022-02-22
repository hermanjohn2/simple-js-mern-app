import { useState, useEffect } from 'react';
import API from './utils/api';

import PersonsTable from './components/PersonsTable';
import Loading from './components/Loading';
import Error from './components/Error';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [error, setError] = useState({ status: false, message: '' });

	const getData = async () => {
		try {
			const { data } = await API.getPersons();
			setPersons(data);
		} catch (err) {
			setError({ status: true, message: err.message });
		}
	};

	useEffect(() => {
		let isSubscribed = true;
		if (isSubscribed) getData();

		return () => {
			isSubscribed = false;
		};
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Simple JS Full Stack App</h1>
			</header>
			<div>
				{!error.status ? (
					<> {persons[0] ? <PersonsTable persons={persons} /> : <Loading />}</>
				) : (
					<Error message={error.message} />
				)}
			</div>
		</div>
	);
};

export default App;
