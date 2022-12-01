const { validationResult } = require('express-validator');
const Room = require('../models/room');
const Resort = require('../models/resort');


const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}

const idExistValidate = async (id) => {
    const idExist = await Room.findById(id);
    if (!idExist) {
        throw new Error(`The id is not exist ${id}`);
    }
}

const emailExistValidate = async (email) => {
    const emailExist = await Resort.findOne({ email });
    if (emailExist) {
        throw new Error(`Email already exist ${email}`);
    }
}

const rncExistValidate = async (rnc) => {
    const rncExist = await Resort.findOne({ rnc });
    if (rncExist) {
        throw new Error(`RNC already exist ${rnc}`);
    }
}

module.exports = {
    validateFields,
    idExistValidate,
    emailExistValidate,
    rncExistValidate
}