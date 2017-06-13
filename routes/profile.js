var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Raul',
    age: 14,
    position: 'Instructor',
    hobbies: ['computer gaming', 'soccer', 'gaming', 'more gaming'],

  res.render('Profile', context);
});

module.exports = router;
