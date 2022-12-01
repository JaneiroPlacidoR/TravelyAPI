const { Router } = require('express');
const { check } = require('express-validator');
const {
    resortsGet,
    oneResortGet,
    resortPost,
    resortPut,
    resortDelete
} = require('../controller/resort');

const { validateFields,
    emailExistValidate,
    rncExistValidate } = require("../middlewares/validate-fields");


const router = Router();

router.get('/', resortsGet);

router.get('/:id', oneResortGet);

router.post('/', [
    //validation if fields are not empty
    check('name', 'Name is required').not().isEmpty(),
    check('img', 'Img is required').not().isEmpty(),
    // check('gallery', 'galery of images is required').not().isEmpty(),
    check('place', 'Place is required').not().isEmpty(),
    check('amountRooms', 'amountRooms is required').not().isEmpty(),
    check('rate', 'Rate is required').not().isEmpty(),
    check('rnc', 'RNC is required').not().isEmpty(),
    //validation what rnc field is 10 length
    check('rnc', 'Invalid RNC').isLength({ min: 10, max: 10 }),
    check('rnc').custom(rncExistValidate),
    check('email').custom(emailExistValidate),
    validateFields
], resortPost);

router.put('/:id', resortPut);

router.delete('/:id', resortDelete);

module.exports = router;