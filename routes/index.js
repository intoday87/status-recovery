var express = require('express');
var _ = require('underscore');
var router = express.Router();
var formData = {};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', _.extend({}, {form: formData}, {title: 'express'}));
});

router.post('/submit', function (req, res, next) {
    formData = req.body;
    console.log(formData);
    res.render('submit-result');
});

module.exports = router;
