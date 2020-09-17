const express = require('express');
const GuestsInfo = require('./GuestControler');
const router = express.Router();

router.get('/allGuests/:id', GuestsInfo.getAllGuests);
router.get('/guest/:id', GuestsInfo.getAGuestById);


module.exports = router;