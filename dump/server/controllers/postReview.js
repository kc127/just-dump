const models = require('../models/postReview.js');

const postReview = (req, res) => {
  console.log(req.body);
  models.saveReview(req.body, (err, doc) => {
    if (err) {
      res.status(400);
    } else {
      res.status(201)
    }
  })
}

module.exports = { postReview }