const router = require('express').Router();
const { findAll } = require('../../controllers/personController');

// Route Matches: /api/person
router.route('/').get(findAll);

module.exports = router;
