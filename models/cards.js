let mongoose = require('mongoose');

let cardSchema = mongoose.Schema({
    title:String,
    content:String,
    author:String,
    editor:String,
    journalist:String,
    documents:[{user:String, content:String, timestamp:Number}],
    accessory:[{user:String, url:String, timestamp:Number}],
    comments:[{user:String, content:String, timestamp:Number}],
    createTime:Number,
    progress:Number,
    index:Number,
    status:String
});

let Card = mongoose.model('Card', cardSchema);
module.exports = Card;