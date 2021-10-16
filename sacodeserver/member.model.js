const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    id: String,
    name: String,
    age: String 
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', MemberSchema);
