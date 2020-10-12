const db = require("../../database/db-config")

const addDrinks = (events) => {
    return db("DrinkList").insert(events, "id")
        .then(ids => {
            const [id] = ids
            return findAddedDrink(id)
        })
}

const findAddedDrink = (id) => {
    return db("DrinkList")
        .where({ id: id }).first()
        .select("*")
}

const findAllEventDrinks = (id) => {
    return db("DrinkList")
        .from("Events as e")
        .where("edl.event_id", "=", id)
        .join("EventDrinkLink as edl", "edl.id", "e.id")
        //.join("Events as e", "edl.id", "e.id")
        .join("DrinkList as d", "edl.id", "d.id")
        //.select("*")
        .select("eventDrink_id", "drinkName", "event_id", "eventName")
}

const deleteDrinkName = (id) => {
    return db('DrinkList')
        .where({ id })
        .del();
}

const updateDrinkName = (id, changes) => {
    return db('DrinkList')
        .where({ id })
        .update(changes);
}

module.exports = {
    addDrinks,
    findAddedDrink,
    deleteDrinkName,
    updateDrinkName,
    findAllEventDrinks
}