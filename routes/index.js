let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/a', function(req, res, next) {
  res.render('a.pug',{msg:`This page is a namespace.`});
});

module.exports = router;
