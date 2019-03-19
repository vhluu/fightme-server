var mongoose = require('mongoose');
var Schema = mongoose;

var GameSchema = new mongoose.Schema({
  invite_code: String,
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('game', GameSchema);
