const express = require('express');
const controllers = require('./controllers/postMarkers.js');
const router = express.Router();

router.post('/markers', controllers.postMarkers);

module.exports = router;