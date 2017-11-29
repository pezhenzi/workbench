let mongoose = require('mongoose');

let deleteCardSchema = mongoose.Schema({
    title:String,
    content:String,
    author:String,
    editor:String,
    journalist:[String],
    documents:[{user:String, content:String, timestamp:Number}],
    accessory:[{user:String, url:String, timestamp:Number}],
    comments:[{user:String, content:String, timestamp:Number}],
    createTime:Number,
    progress:Number,
    index:Number,
    status:String,
    cardId:String,
    reportId:String,
    editorIdea:String,
});

let DeleteCard = mongoose.model('DeleteCard', deleteCardSchema);
module.exports = DeleteCard;