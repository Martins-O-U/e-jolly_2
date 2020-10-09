const Events = require('./EventsModel');

const addAnEvent = async (req, res) => {
    try {
        const newEvent = req.body;
        const addedEvent = await Events.addEvents(newEvent);
        return res.status(201).json(addedEvent);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const planner_id = req.params.id
        const planner_events = await Events.findAllPlannerEvents(planner_id)
        return res.status(200).json(planner_events);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAnEvent = async (req, res) => {
    try {
        const event_id = req.params.id
        const event = await Events.findAddedEvent(event_id)
        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteEventInfo = async (req, res) => {
    try {
        const { id } = req.params;
        await Events.deleteEventName(id);
        return res.sendStatus(204).json({ Message: `Event with id ${req.params.id} has been deleted` });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateEventInfo = async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        await Events.updateEventName(id, changes);
        const updatedEvent = await Events.findAddedEvent(id);
        return res.status(200).json(updatedEvent);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addAnEvent,
    getAllEvents,
    getAnEvent,
    updateEventInfo,
    deleteEventInfo
}