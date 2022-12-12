const mongoose = require('mongoose');

// Schema Design
const userShema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username Is Required'],
    },
    email: {
      type: String,
      required: [true, 'Email Is Required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password Is Required'],
    },
  },
  { timestamps: true }  
);

// export
const userModal = mongoose.model('users', userShema);

module.exports = userModal;
