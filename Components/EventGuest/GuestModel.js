const db = require("../../database/db-config");


const addGuest = (guest) => {
    return db("GuestList").insert(guest, "id")
        .then(ids => {
            const [id] = ids;
            return findGuestById(id);
        })
}


const findGuestById = (id) => {
    return db("GuestList")
        .join('Events', "Events.id", "GuestList.id")
        .where({ guestEvent_id: id })
        .join('Tables', "Tables.id", "GuestList.id")
        .join('FoodList', "FoodList.id", "GuestList.id")
        .join('DrinkList', "DrinkList.id", "GuestList.id")
        .select("GuestList.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table", "Events.eventName")
}
const findGuestByName = (name) => {
    return db("GuestList").where({ guestName: name })
        .join('Events', "Events.id", "GuestList.id")
        .join('Tables', "Tables.id", "GuestList.id")
        .join('FoodList', "FoodList.id", "GuestList.id")
        .join('DrinkList', "DrinkList.id", "GuestList.id")
        .select("GuestList.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table", "Events.eventName")
}

const findAllGuest = (event) => {
    return db("EventPlanners").where({ eventName: event })
        .join('GuestList', "EventPlanners.id", "GuestList.id")
        .join('Events', "Events.id", "GuestList.id")
        .join('Tables', "Tables.id", "GuestList.id")
        .join('FoodList', "FoodList.id", "GuestList.id")
        .join('DrinkList', "DrinkList.id", "GuestList.id")
        .select("GuestList.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table", "Events.eventName")
}
module.exports = {
    addGuest,
    findGuestByName,
    findGuestById,
    findAllGuest

}