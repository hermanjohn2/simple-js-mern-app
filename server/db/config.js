const { readFileSync } = require('fs');
const path = require('path');

const timeout = async ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
	xmlAPI: {
		delay: 10000, // in ms
		async findAll() {
			const xmlPath = path.join(process.cwd(), '/server/db/person.xml');
			const xmlData = readFileSync(xmlPath, 'utf-8');
			await timeout(this.delay);
			return xmlData;
		}
	},
	jsonAPI: {
		delay: 5000, // in ms
		async findAll() {
			await timeout(this.delay);
			const { person } = require('../db/person.json');
			return person;
		}
	}
};
