const mongoose = require('mongoose');

const DB_URI =
	process.env.DB_URI ||
	'mongodb+srv://test:test123@cluster0.1gsip.mongodb.net/movie?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;

module.exports = (app) => {
	mongoose
		.connect(DB_URI, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() =>
			app.listen(port, console.log(`Server is listening on ${port}`))
		)
		.catch((e) => console.log(e.message));
};
