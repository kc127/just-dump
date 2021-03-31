const mongoose = require('mongoose');

let markerSchema = mongoose.Schema({
  lat: Number,
  lng: Number,
  time: Number
});

let Markers = mongoose.model('markers', markerSchema);

let save = (marker, callback) => {
  const markerDoc = new Markers(marker);
  markerDoc.save((err, doc) => {
    if (err) {
      console.log('error adding marker to mongo');
      return;
    }
    console.log('document inserted successfully');
  })
}

module.exports = { save }