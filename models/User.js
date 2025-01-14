// User.js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, required: false }
});
module.exports = mongoose.model('User', UserSchema);

UserSchema.methods.isCorrectPassword = function(password, callback){
    // bcrypt.compare(password, this.password, function(err, same) {
      if (password == this.password) {
        callback(err);
      } else {
        callback(err, same);
      }
    // });
  }
  