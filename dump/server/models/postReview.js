const mongoose = require('mongoose');
const db = require('../db/index.js')

  let ReviewSchema = mongoose.Schema({
    cleanliness: {type: String, required: true},
    recommend: {type: String, required: true},
    time: {type: String, required: true},
    comments: {type: String, require: true},
    category: {type: String, require: true}
  });

  /* compile schema to model */
  var Review = mongoose.model('reviews', ReviewSchema);

  const saveReview = (review, callback) => {
  /* a doc instance */
  const reviewDoc = new Review(review);
  reviewDoc.save((err, doc) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, doc);
    }
  })
}


module.exports = { saveReview }