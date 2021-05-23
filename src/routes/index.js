const formRouter = require('./form');
const infoRouter = require('./info');

module.exports = (app) => {
	app.use('/form', formRouter);
	app.use('/info', infoRouter);
};
