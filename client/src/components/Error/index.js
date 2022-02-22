const Error = ({ message }) => {
	return (
		<>
			<h2>Error: {message}</h2>
			<button onClick={() => (window.location.href = '/')}>Try Again</button>
		</>
	);
};

export default Error;
