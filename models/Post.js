const mongoose = require('mongoose');

//== Posts Model
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// 1rt param: Model name
// 2nd param: Schema to use
module.exports = mongoose.model('Post', PostSchema);