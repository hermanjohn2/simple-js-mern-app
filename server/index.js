const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(morgan('tiny'));

app.use(routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
	});
}

app.listen(PORT, () =>
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
