const express = require('express');
const router = express.Router();

router.use('/blog/', require('./blog.routes'));

module.exports = router;