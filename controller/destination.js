const { response, request } = require('express');
const Destination = require('../models/destination');

const destinationsGet = async (req = request, res = response) => {

    const [total, destinations] = await Promise.all([
        Destination.countDocuments({ state: true }),
        Destination.find({ state: true })
    ])

    res.json({
        total,
        destinations
    })
}

const oneDestinationGet = async (req = request, res = response) => {
    const id = req.params.id;

    const destination = await Destination.findById(id)

    res.json({
        destination
    })
}

const destinationPost = async (req = request, res = response) => {

    const {gallery,country,city,rate,state,description,mapLocation } = req.body;
    let name = city+'-'+country;
    const destination = new Destination({name,gallery,country,city,rate,state,description,mapLocation });
    await destination.save();

    res.json({
        destination
    })

}

const destinationPut = async (req = request, res = response) => {
    const id = req.params.id;
    const { _id, ...resto } = req.body;

    const destination = await Destination.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'Destination updated!',
        destination
    })
}

const destinationDelete = async (req = request, res = response) => {
    const id = req.params.id;
    const destination = await Destination.findByIdAndUpdate(id, { state: false });

    res.json({
        msg: 'Destination deleted!',
        destination
    })
}


module.exports = {
    destinationsGet,
    oneDestinationGet,
    destinationPost,
    destinationPut,
    destinationDelete
}