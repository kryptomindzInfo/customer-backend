// User.js
const mongoose = require('mongoose');
const EndUserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: Number, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true }
});
module.exports = mongoose.model('EndUser', EndUserSchema);

EndUserSchema.methods.isCorrectPassword = function(password, callback){
    // bcrypt.compare(password, this.password, function(err, same) {
      if (password == this.password) {
        callback(err);
      } else {
        callback(err, same);
      }
    // });
  }
  