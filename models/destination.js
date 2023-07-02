
const { Schema, model } = require('mongoose');

const destinationSchema = new Schema({
    
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    gallery:{
        type: [String]
    },
    country: {
        type: String,
        required: [true, 'Place is required']
    },
    city: {
        type: String,
        required: [true, 'amountRooms is required']
    },
    rate: {
        type: String,
        required: [true, 'Rate is required']
    },
    state: {
        type: Boolean,
        default: true
    },
    description:{
        type: [String]
    },
    mapLocation:{
        type: String
    }

});


module.exports = model('Destination', destinationSchema);
