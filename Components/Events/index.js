const express = require('express');
const EventsInfo = require('./EventsController');
const router = express.Router();

router.get('/allEvents/:id', EventsInfo.getAllEvents);
router.get('/events/:id', EventsInfo.getAnEvent);
router.delete('/events/:id', EventsInfo.deleteEventInfo);
router.patch('/events/:id', EventsInfo.updateEventInfo);
router.post('/events/', EventsInfo.addAnEvent);

module.exports = router;