const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    state: {
        type: Boolean,
        default: true
    }
    

});


module.exports = model('User', userSchema);
