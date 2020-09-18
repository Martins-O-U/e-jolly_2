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
    return db
        .select("GuestList.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table", "Events.eventName", "Events.id")
        .from("GuestList")
        .join('Events', "Events.id", "GuestList.id")
        .leftJoin('Tables', "Tables.id", "GuestList.id")
        .leftJoin('FoodList', "FoodList.id", "GuestList.id")
        .leftJoin('DrinkList', "DrinkList.id", "GuestList.id")
        .where("Events.eventName", "=", event)
}
module.exports = {
    addGuest,
    findGuestByName,
    findGuestById,
    findAllGuest

}