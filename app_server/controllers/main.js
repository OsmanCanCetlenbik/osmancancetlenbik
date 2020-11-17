var express = require('express');
var router = express.Router();

module.exports.index = function (req, res, next) {
  /* GET home page. */
  res.render('index', { title: 'Osman' });
};

module.exports.admin = function (req, res, next) {
  /* GET home page. */
  res.render('admin', { title: 'Admin' });
};