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
        .from("GuestLink as gl")
        .where("gl.guestEvent_id", "=", id)
        .join("Events as e", "gl.id", "e.id")
        .select("*")
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