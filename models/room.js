const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
    nickname: {
        type: String,
        required: [true, 'Nickname is required']
    },
    typeRoom: {
        type: String,
        required: [true, 'Type is required']
    },
    price: {
        type: String,
        required: [true, 'Price is required']
    },
    includes: {
        type: [String]
    },
    noRoom: {
        type: String,
        required: [true, 'No. is required']
    },
    img: {
        type: String,
        required: [true, 'No. is required']
    },
    state: {
        type: Boolean,
        default: true
    },
    resort: { type: Schema.ObjectId, ref: "Resort" }
});



module.exports = model('Room', roomSchema);
