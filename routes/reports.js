const express = require('express');
const router = express.Router();
const report = require('../models/reports');
const formidable = require('formidable');

router.post('/add-report', function(req, res){
    let form = new formidable.IncomingForm();
    form.uploadDir = 'public/upload';
    form.keepExtensions = true;
    form.multiples = true;
    form.parse(req, function(err, fields, files){
        report.create({
            title:fields.title,
            content:fields.content,
            author:fields.author,
            reportId:fields.reportId,
        }, function(err){
            if(err) console.log(err);
            res.json('Add report success!');
        });
    })
});

router.get('/get-reports', function(req, res){
    report.find({status:'new'}, function(err, data){
        if(err) console.log(err);
        res.json({data:data});
    });
});

module.exports = router;