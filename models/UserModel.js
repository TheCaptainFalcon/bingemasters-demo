const mongoose = require('mongoose'),
    { Schema } = mongoose;

const userSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    score: { 
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const userModel = mongoose.model('users' , userSchema);

module.exports = userModel;