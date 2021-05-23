const fileUpload = require('express-fileupload');
const path = require('path');
const Data = require('../models/Data');

const form = {};
form.post = async (req, res, next) => {
	if (
		!req.files ||
		Object.keys(req.files).length === 0 ||
		!req.body.name ||
		!req.body.lan ||
		!req.body.release
	) {
		return res
			.status(400)
			.send('Please follow the instructions, It is bad request');
	}

	const { thumb, video } = req.files;
	const { name, release, lan } = req.body;

	// upload files to server path
	const uploadDir = path.join(__dirname + '../../../public');

	// thumbnail upload
	const thumbPath = '/thumb/' + thumb.name.split(' ').join('-');
	const thumbUpload = uploadDir + thumbPath;
	thumb.mv(thumbUpload, (err) => {
		if (err) return next(err);
	});

	// video upload

	const videoPath = '/video/' + video.name.split(' ').join('-');
	const videoUpload = uploadDir + videoPath;
	video.mv(videoUpload, (err) => {
		if (err) return next(err);
	});

	try {
		const data = await Data.create({
			name: name,
			language: lan,
			release: release,
			thumb: thumbPath,
			video: videoPath,
		});
		res.json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = form;
