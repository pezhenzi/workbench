let mongoose = require('mongoose');

let completeCardSchema = mongoose.Schema({
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

let CompleteCard = mongoose.model('CompleteCard', completeCardSchema);
module.exports = CompleteCard;