
const { Schema, model } = require('mongoose');

const resortSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },
    img: {
        type: String,
        required: [true, 'No. is required']
    },
    gallery:{
        type: [String]
    },
    place: {
        type: String,
        required: [true, 'Place is required']
    },
    amountRooms: {
        type: String,
        required: [true, 'amountRooms is required']
    },
    rate: {
        type: String,
        required: [true, 'Rate is required']
    },
    rnc: {
        type: String,
        required: [true, 'RNC is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    state: {
        type: Boolean,
        default: true
    },
    allservices:{
        type: [String]
    }, 
    description:{
        type: String
    },
    mapLocation:{
        type: String
    }

});


module.exports = model('Resort', resortSchema);
