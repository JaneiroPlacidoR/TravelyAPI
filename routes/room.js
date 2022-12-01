const { Router } = require('express');
const { check } = require('express-validator');
const {
    roomsGet,
    oneRoomGet,
    roomPost,
    roomPut,
    roomDelete
} = require('../controller/room');
const {
    validateFields, idExistValidate
} = require('../middlewares/validate-fields');

const router = Router();

router.get('/room', roomsGet);

router.get('/room/:id', [
    //validation id is a mongo id
    check('id', '1-It is not a valid id').isMongoId(),
    //validation id mongo exist
    check('id').custom(idExistValidate),
    validateFields
], oneRoomGet);


router.post('/room', [
    //validation if fields are not empty
    check('nickname', 'Nickname is required').not().isEmpty(),
    check('typeRoom', 'Type is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('noRoom', 'No. is required').not().isEmpty(),
    check('img', 'Img is required').not().isEmpty(),
    validateFields
], roomPost);

router.put('/room/:id', [
    //validation id is a mongo id
    check('id', '2-It is not a valid id').isMongoId(),
    //validation id mongo exist
    check('id').custom(idExistValidate),
    validateFields
], roomPut);

router.delete('/room/:id', [
    //validation id is a mongo id
    check('id', '3-It is not a valid id').isMongoId(),
    //validation id mongo exist
    check('id').custom(idExistValidate),
    validateFields
], roomDelete);

module.exports = router;