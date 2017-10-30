const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const user = require('../models/users');
const formidable = require('formidable');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/save-info', function(req, res, next){
    let form = new formidable.IncomingForm();
    form.uploadDir = 'public/upload';
    form.keepExtensions = true;
    form.multiples = true;
    form.parse(req, function(err, fields, files){
        console.log(fields.name);
        console.log(fields.timestamp);
        const secret = 'jnwbnewsworkbench';
        const pwd = crypto.createHmac('sha1',secret)
            .update(fields.password)
            .digest('hex');
        user.create({
            name:fields.name,
            account:fields.account,
            role:fields.role,
            password:pwd,
            registerTime:fields.timestamp,
        }, function(err){
            if(err) console.log(err);
        })
    });
    res.json(`save info done.`);
});

module.exports = router;
