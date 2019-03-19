var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Turn = require('../model/turn.js');
const cors = require('cors');

var app = express();
app.use(cors());
var server = require('http').createServer(app);
// var io = require('socket.io')(server);

// server.listen(4000);

// // socket io
// io.on('connection', function (socket) {
//   console.log('User connected ' + socket.id);
//   socket.on('disconnect', function(data) {
//     console.log('User disconnected ' + this.id);
//   });
//   socket.on('save-turn', function (data) {
//     console.log(data);
//     io.emit('new-turn', { turn: data });
//   });
//   socket.on('joined-game', function(data) {
//     console.log('player joined game' + this.id);
//     console.log(data);
//     io.emit('start-game', data);
//   });
// });

/* GET ALL Turns */
router.get('/', function(req, res, next) {
  Turn.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Turn BY ID */
router.get('/:id', function(req, res, next) {
  Turn.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Turn */
router.post('/', function(req, res, next) {
  Turn.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Turn */
router.put('/:id', function(req, res, next) {
  Turn.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Turn */
router.delete('/:id', function(req, res, next) {
  Turn.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;