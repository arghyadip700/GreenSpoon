const mongoose = require('mongoose');

const query = new mongoose.Schema({
     email: { type: String, required: true },
     username: { type: String, required: true },
   });


module.exports = mongoose.model('GreenSpoon', query);

