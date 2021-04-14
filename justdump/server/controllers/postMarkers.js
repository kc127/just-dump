const models = require('../models/postMarkers.js');

const postMarkers = (req, res) => {
  console.log(req.body);
  models.saveMarker(req.body, (err, doc) => {
    if (err) {
      res.status(400);
    } else {
      res.status(201)
    }
  })
}

module.exports = { postMarkers }