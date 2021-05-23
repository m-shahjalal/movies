require('dotenv').config();
const express = require('express');
const path = require('path');

const database = require('./lib/db');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

middleware(app);
routes(app);
database(app);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production' || 'development') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
