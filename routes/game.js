var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = require('../model/game.js');

/* GET ALL Games */
router.get('/', function(req, res, next) {
  Game.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Game BY ID */
router.get('/:id', function(req, res, next) {
  Game.findOne({invite_code: req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Game */
router.post('/', function(req, res, next) {
  Game.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Game */
router.put('/:id', function(req, res, next) {
  Game.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Game */
router.delete('/:id', function(req, res, next) {
  Game.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;