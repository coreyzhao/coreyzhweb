const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new Schema({
  date:String,
  title:String,
  content:String,
  author:{type:Schema.Types.ObjectId, ref:'User'}
}, {
  timestamps: true
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel;