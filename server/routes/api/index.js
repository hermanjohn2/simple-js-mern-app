const router = require('express').Router();
const personRoutes = require('./person');

router.use('/person', personRoutes);

module.exports = router;
