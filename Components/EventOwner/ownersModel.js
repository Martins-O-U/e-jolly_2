const db = require("../../database/db-config");

function addPlanner(user) {
    return db("EventPlanners").insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return findAddedPlanner(id);
        })
}

function findAddedPlanner(id) {
    return db("EventPlanners")
        .where({ id: id })
        .select("username", "email", "phoneNumber", "location")
}

function findAllPlanners() {
    return db("EventPlanners")
        .join("Events", "EventPlanners.id", "Events.id")
        .select("username", "email", "phoneNumber", "location")
};

function findPlannersBy(filter) {
    return db("EventPlanners").where({ username: filter });
}

function findAPlanner(name) {
    return db("EventPlanners")
        .join("Events", "EventPlanners.id", "Events.id")
        .where({ username: name })
        .select("username", "email", "phoneNumber", "location", "eventName")
}

module.exports = {
    findAllPlanners,
    findAPlanner,
    findAddedPlanner,
    addPlanner,
    findPlannersBy
}