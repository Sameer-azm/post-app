const mongoose=require('mongoose')

const postSchema = new mongoose.Schema({
  image: String,
  caption:String
});
// const userSchema = new mongoose.Schema({
//   name: String,
//   email:String,
//   passwird:email,
//   posts:[post1,post2,post3],
// });


const post = mongoose.model('post', postSchema);
module.exports=post

// module.exports = mongoose.model('post', postSchema);