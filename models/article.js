let mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title:String,
    subtitle:String,
    content:String,
    author:String,
    pictureAuthor:String,
    keyWords:[String],
    createTime:Number,
    submitTime:Number,
    accessory:[String],
    edition:[{title:String, subtitle:String, content:String}],
    status:String,
    cardId:String,
});

let Article = mongoose.model('Article', articleSchema);
module.exports = Article;