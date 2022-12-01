const { response, request } = require('express');
const Resort = require('../models/resort');

const resortsGet = async (req = request, res = response) => {

    const [total, resorts] = await Promise.all([
        Resort.countDocuments({ state: true }),
        Resort.find({ state: true })
    ])

    res.json({
        total,
        resorts
    })
}

const oneResortGet = async (req = request, res = response) => {
    const id = req.params.id;

    const resort = await Resort.findById(id)

    res.json({
        resort
    })
}

const resortPost = async (req = request, res = response) => {

    const { name, img, gallery, place, amountRooms, rate, rnc, phone, email, state,allservices,description,mapLocation } = req.body;
    const resort = new Resort({ name, img, gallery, place, amountRooms, rate, rnc, phone, email, state,allservices,description,mapLocation });
    await resort.save();

    res.json({
        resort
    })

}

const resortPut = async (req = request, res = response) => {
    const id = req.params.id;
    const { _id, ...resto } = req.body;

    const resort = await Resort.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'Room updated!',
        resort
    })
}

const resortDelete = async (req = request, res = response) => {
    const id = req.params.id;
    const resort = await Resort.findByIdAndUpdate(id, { state: false });

    res.json({
        msg: 'Room deleted!',
        resort
    })
}


module.exports = {
    resortsGet,
    oneResortGet,
    resortPost,
    resortPut,
    resortDelete
}