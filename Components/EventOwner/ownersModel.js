const db = require("../../database/db-config");

function findAllPlanners() {
    return db("EventPlanners")
        .join("Events", "EventPlanners.id", "Events.id")
        .select("username", "email", "phoneNumber", "location")
};

function findAPlanner(name) {
    return db("EventPlanners")
        .join("Events", "EventPlanners.id", "Events.id")
        .where({ username: name }).first()
        .select("username", "email", "phoneNumber", "location", "eventName")
}

module.exports = {
    findAllPlanners,
    findAPlanner
}