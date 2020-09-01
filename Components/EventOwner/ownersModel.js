const db = require("../../database/db-config");

function findAllOwners() {
    return db("EventPlannerList")
        .join("EventList", "EventPlannerList.id", "EventList.id")
        .select("Name", "Email", "PhoneNumber", "EventName")
};

function findAnOwner(name) {
    return db("EventPlannerList")
        .join("EventList", "EventPlannerList.id", "EventList.id")
        .where({ EventName: name }).first()
        .select("Name", "Email", "PhoneNumber", "EventName")
}

module.exports = {
    findAllOwners,
    findAnOwner
}