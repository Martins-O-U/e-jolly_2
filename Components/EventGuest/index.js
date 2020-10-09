const express = require('express');
const GuestsInfo = require('./GuestControler');
const router = express.Router();

router.get('/allGuests/:id', GuestsInfo.getAllGuests);
router.get('/guests/:id', GuestsInfo.getAGuestById);
router.delete('/guests/:id', GuestsInfo.deleteGuestInfo);
router.patch('/guests/:id', GuestsInfo.updateGuestInfo);
router.post('/guests/', GuestsInfo.addAGuest);
router.get('/guestSearch/', GuestsInfo.getAGuestByName);


module.exports = router;