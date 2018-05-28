var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongoodb://localhost/test");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
const user = mongoose.model('user1', { name: String });
const kitty = new user({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
  res.render('index', { title: 'Express' });
});

module.exports = router;

