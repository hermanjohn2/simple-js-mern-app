import { useState, useEffect } from 'react';

const Loading = () => {
	const [loadingMessage, setLoadingMessage] = useState(
		'Loading table from API response...'
	);
	useEffect(() => {
		let isSubscribed = true;

		setTimeout(() => {
			if (isSubscribed) setLoadingMessage('Almost done...');
		}, 10000);

		return () => {
			isSubscribed = false;
		};
	});

	return <h2>{loadingMessage}</h2>;
};

export default Loading;
