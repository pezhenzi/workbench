let mongoose = require('mongoose');

let reportsSchema = mongoose.Schema({
    author:String,
    title:String,
    content:String,
    createTime:Number,
    status:String,
    index:Number,
});

let Report = mongoose.model('Report', reportsSchema);
module.exports = Report;