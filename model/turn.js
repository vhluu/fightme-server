var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TurnSchema = new mongoose.Schema({
  game: { type: Schema.Types.ObjectId, ref: 'game' },
  nickname: String,
  move: String,
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Turn', TurnSchema);