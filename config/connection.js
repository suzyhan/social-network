const mongoose = require('mongoose');

// Wrap Mongoose around connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetwork');

// Export connection
module.exports = mongoose.connection;