const express = require('express');
const OwnersInfo = require('./ownerControler');
const router = express.Router();

router.get('/allOwners', OwnersInfo.getAllOwners);
router.get('/anOwner', OwnersInfo.getAnOwner);


module.exports = router;