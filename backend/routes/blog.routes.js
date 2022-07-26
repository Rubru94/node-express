const express = require('express');
const router = express();
router.disable('x-powered-by');
const blogCtrl = require('../controllers/blog.controller');

router.get('/', blogCtrl.findAll);

router.post('/', blogCtrl.create);

module.exports = router;