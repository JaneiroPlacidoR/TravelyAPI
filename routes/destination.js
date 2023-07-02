const { Router } = require('express');
const { check } = require('express-validator');
const {
    destinationsGet,
    oneDestinationGet,
    destinationPost,
    destinationPut,
    destinationDelete
} = require('../controller/destination');

const { validateFields } = require("../middlewares/validate-fields");


const router = Router();

router.get('/destination', destinationsGet);

router.get('/destination/:id', oneDestinationGet);

router.post('/destination', destinationPost);

router.put('/destination/:id', destinationPut);

router.delete('/destination/:id', destinationDelete);

module.exports = router;