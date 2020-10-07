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
        .select("EventPlanners.id", "username", "email", "phoneNumber", "location", "Events.eventName")
};

function findPlannersBy(filter) {
    return db("EventPlanners")
        .where({ username: filter })
        .select("username");
}

function findAPlanner(searchTerms) {
    return db("EventPlanners")
        .from('EventPlanners as ep')
        .whereRaw(
            'LOWER(ep.username) LIKE ?',
            `%${searchTerms.search_query.toLowerCase()}%`
        )
        .join("Events", "ep.id", "Events.id")
        .select("username", "email", "phoneNumber", "location", "eventName")
}

module.exports = {
    findAllPlanners,
    findAPlanner,
    findAddedPlanner,
    addPlanner,
    findPlannersBy
}