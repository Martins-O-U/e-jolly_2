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
        .select("*")
}

const findAllPlannerEvents = (id) => {
    return db("EventPlanners")
        .from("EventPlannerLink as epl")
        .where("epl.eventPlanner_id", "=", id)
        .join("Events as E", "epl.id", "E.id")
        .select("eventPlanner_id", "event_id", "eventName")
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