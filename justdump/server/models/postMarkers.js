const mongoose = require('mongoose');
const db = require('../db/index.js')

  let MarkerSchema = mongoose.Schema({
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
    time: {type: String, required: true},
  });

  /* compile schema to model */
  var Marker = mongoose.model('markers', MarkerSchema);

  const saveMarker = (marker, callback) => {
  /* a doc instance */
  const markerDoc = new Marker(marker);
  markerDoc.save((err, doc) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, doc);
    }
  })
}


module.exports = { saveMarker }