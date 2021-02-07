var mongoose = require('mongoose');

var memes = new mongoose.Schema(
{
    owner:String,
    caption:String,
    url:String
}

)

module.exports = mongoose.model('meme', memes)