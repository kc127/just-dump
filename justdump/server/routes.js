const express = require('express');
const controllers = require('./controllers/index.js');
const router = express.Router();

router.post('/markers', controllers.postMarkers.postMarkers);
router.post('/review', controllers.postReview.postReview);

module.exports = router;