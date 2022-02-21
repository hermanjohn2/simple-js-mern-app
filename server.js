const express = require('express');
const compression = require('compression');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(morgan('tiny'));

app.listen(PORT, () =>
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
