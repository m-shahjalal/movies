const router = require('express').Router();
const { get } = require('../controllers/info');

router.get('/', get);

module.exports = router;
