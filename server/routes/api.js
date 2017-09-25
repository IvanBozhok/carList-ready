const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Car = require('../modules/car');

const db = "mongodb://admin:admin@ds147974.mlab.com:47974/mybd";
mongoose.Promise = global.Promise;
mongoose.connect(db, { useMongoClient: true }, function(err) {
  if ( err ) {
    console.log('Database error! ' + err);
  }
});

router.get('/cars', function(req, res) {
  console.log("Get cars list");
  Car.find({})
    .exec(function(err, cars) {
      if ( err ) {
        res.send('Error loading cars list! ' + err);
      } else {
        res.json(cars);
      }
    })
});

router.get('/cars/:id', function(req, res) {
  console.log("Get a single car info");
  Car.findById(req.params.id)
    .exec(function(err, car) {
      if ( err ) {
        console.log('Car info loading error! ' + err);
      } else {
        res.json(car);
      }
    })
});


module.exports = router;
