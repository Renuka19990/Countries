const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    searches: { type: [String], default: [] },
});

module.exports = mongoose.model('History', historySchema);
