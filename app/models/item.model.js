const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: String,
  size: String,
  quantity: Number,
  color: String,
  sex: String,
  price: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', ItemSchema);