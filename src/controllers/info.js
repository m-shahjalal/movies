const Data = require('../models/Data');

const info = {};

info.get = async (req, res, next) => {
	const { limit, page } = req.query;
	const skipItems = (parseInt(page) - 1) * 10;
	const limitItems = parseInt(limit);
	console.log(skipItems, limitItems);

	try {
		const totalDocuments = await Data.countDocuments();
		const data = await Data.find({})
			.skip(parseInt(skipItems))
			.limit(parseInt(limitItems));
		res.json({
			movies: data,
			totalDocuments,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = info;
