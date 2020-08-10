var express = require('express');
var router = express.Router();
var socketApi = require('../socketApi');
var io = socketApi.io;
var moment = require('moment'); // require


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST data home page. */
router.post('/', function(req, res, next) {
	req.body.datetime = moment().format('YYYY-MM-DD HH:mm:ss');
	io.emit('item', req.body); // This will emit the event to all connected sockets
  res.status(200).send('OK')
});

module.exports = router;
