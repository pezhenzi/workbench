let mongoose = require('mongoose');

let reportsSchema = mongoose.Schema({
    author:String,
    title:String,
    content:String,
    createTime:Number,
    status:String,//状态分为：new、cooking、done、dropped。admin或editor对report操作时，在服务端修改本字段。
    index:Number,
    reportId:String,
});

let Report = mongoose.model('Report', reportsSchema);
module.exports = Report;