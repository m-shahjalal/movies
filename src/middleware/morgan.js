const morgan = require('morgan');

const morganFormat = process.env.NODE_ENV !== 'production' ? 'dev' : 'combined';

module.exports = {
	stderr: morgan(morganFormat, {
		skip: function (req, res) {
			return res.statusCode < 400;
		},
		stream: process.stderr,
	}),
	stdout: morgan(morganFormat, {
		skip: function (req, res) {
			return res.statusCode >= 400;
		},
		stream: process.stdout,
	}),
};
