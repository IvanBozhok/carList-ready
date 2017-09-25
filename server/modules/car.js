const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  "brand": String,
  "model": String,
  "dt": Array,
  "i": Array,
  "image": String,
  "description": String,
  "spares": Array
});

module.exports = mongoose.model('car', carSchema, 'cars');
