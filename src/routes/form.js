const router = require('express').Router();
const { post } = require('../controllers/form');

router.post('/', post);

module.exports = router;
