const express = require('express');
const router = express.Router();
const card = require('../models/cards');
const formidable = require('formidable');

router.post('/save-card', function(req, res){
    let form = new formidable.IncomingForm();
    form.uploadDir = 'public/upload';
    form.keepExtensions = true;
    form.multiples = true;
    form.parse(req, function(err, fields, files){
        card.create({
            title:fields.title,
            content:fields.content,
            author:fields.author,
            editor:fields.editor,
            cardId:fields.cardId,
            reportId:fields.reportId,
            createTime:fields.createTime,
            status:'active',
            journalist:fields.journalist,
            editorIdea:fields.editorIdea,
        }, function(err){
            if(err){
                console.log(err);
            }
            res.json('Add card success!');
        });
    })
});

router.get('/get-cards', function(req, res){
    card.find({status:'active'}, function(err, data){
        if(err) console.log(err);
        res.json({data:data});
    });
});

module.exports = router;