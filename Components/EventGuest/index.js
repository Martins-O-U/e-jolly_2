const express = require('express');
const GuestsInfo = require('./GuestControler');
const router = express.Router();

router.get('/allGuests/:id', GuestsInfo.getAllGuests);
router.get('/guestById/:id', GuestsInfo.getAGuestById);
router.get('/guestSearch/', GuestsInfo.getAGuestByName);


module.exports = router;