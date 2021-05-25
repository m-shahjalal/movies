require('dotenv').config();
const express = require('express');
const path = require('path');

const database = require('./lib/db');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

middleware(app);
app.use('/info', routes.info);
app.use('/form', routes.form);
app.get('*', (req, res) => {
	res.send(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
});

database(app);
