const { xml2js } = require('xml-js');
const { jsonAPI, xmlAPI } = require('../db/config');

module.exports = {
	findAll: async (req, res) => {
		try {
			const jsonData = await jsonAPI.findAll();

			const xml = await xmlAPI.findAll();
			const {
				persons: { person: convertedXML }
			} = xml2js(xml, { compact: true });

			const convertedXmlData = convertedXML.map(item => {
				const obj = {};
				Object.keys(item).forEach(key => {
					key !== 'id'
						? (obj[key] = item[key]['_text'])
						: (obj[key] = Number(item[key]['_text']));
				});
				return obj;
			});

			const response = [...jsonData, ...convertedXmlData].sort(
				(a, b) => a.id - b.id
			);

			res.status(200).json(response);
		} catch (err) {
			console.log(err);
			res.status(422).json(err);
		}
	}
};
