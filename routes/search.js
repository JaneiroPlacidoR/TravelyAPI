const { Router } = require('express');
const {
    searchRoom,
    searchAll
} = require('../controller/room');
const router = Router();


router.get('/search/:term/:adults/:children/:rooms', searchRoom);
router.get('/find/:word', searchAll);


module.exports = router;