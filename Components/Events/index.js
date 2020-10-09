const express = require('express');
const EventsInfo = require('./GuestControler');
const router = express.Router();

router.get('/allEvents/:id', EventsInfo.getAllEvents);
router.get('/events/:id', EventsInfo.getAnEvent);
router.delete('/events/', EventsInfo.deleteEventInfo);
router.patch('/events/', EventsInfo.updateEventInfo);
router.post('/events/', EventsInfo.addAnEvent);

module.exports = router;