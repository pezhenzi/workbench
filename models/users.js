let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:String,
    account:String,
    role:String,
    password:String,
    avatar:String,
    status:String,
    loginTime:Number,
    logoutTime:Number,
    score:Number,
    totalReports:Number,
    totalEdit:Number,
    totalArticles:Number,
    currentWork:{cardId:String},
    historyWorks:[String],
});

let User = mongoose.model('User', userSchema);
module.exports = User;