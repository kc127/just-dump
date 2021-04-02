const express = require('express');
const controllers = require('/Users/kanchanchauhan/Documents/sei/MVP/MVP/dump/server/controllers/index.js');
//const controllers = require('./controllers');
const router = express.Router();

router.post('/markers', controllers.postMarkers.postMarkers);
router.post('/review', controllers.postReview.postReview);

module.exports = router;