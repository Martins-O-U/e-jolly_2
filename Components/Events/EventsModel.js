const db = require("../../database/db-config")

const addEvents = (events) => {
    return db("Events").insert(events, "id")
        .then(ids => {
            const [id] = ids
            return findAddedEvent(id)
        })
}

const findAddedEvent = (id) => {
    return db("Events")
        .where({ id: id }).first()
        .join("EventPlanners", "Events.id", "EventsPlanners.id")
        .select("Events.eventName", "Events.eventPlanner_id", "EventPlanner.username")
}

const findAllPlannerEvents = (username) => {
    return db("EventPlannerLink")
        .from("EventPlannerLink")
        .where({ username: username })
        .join("Events", "EventPlannerLink.id", "Events.id")
        .join("EventPlanners", "EventPlanners.id", "EventPlannerLink.id")
        .select("Events.eventName", "Events.eventPlanner_id", "EventPlanner.username")
}

const deleteEventName = (id) => {
    return db('Events')
        .where({ id })
        .del();
}

const updateEventName = (id, changes) => {
    return db('Events')
        .where({ id })
        .update(changes);
}

module.exports = {
    addEvents,
    findAddedEvent,
    deleteEventName,
    updateEventName,
    findAllPlannerEvents
}