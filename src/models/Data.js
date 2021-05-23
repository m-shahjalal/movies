const { model, Schema } = require('mongoose');

const dataSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Movie name is required'],
	},

	release: {
		type: String,
		required: [true, 'release date is required'],
	},
	language: {
		type: String,
		required: [true, 'language is required'],
	},
	thumb: {
		type: String,
		required: true,
	},
	video: {
		type: String,
		required: true,
	},
});

const Data = model('Data', dataSchema);
module.exports = Data;
