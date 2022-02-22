import axios from 'axios';

const apiUtils = {
	getPersons: async () => axios.get('/api/person')
};

export default apiUtils;
