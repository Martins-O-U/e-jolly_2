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
        .where("GuestList.id", "=", id)
        .join('Tables', "Tables.id", "GuestList.id")
        .join('FoodList', "FoodList.id", "GuestList.id")
        .join('DrinkList', "DrinkList.id", "GuestList.id")
        .select("GuestList.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table")
}

function findGuestByName(searches) {
    return db("GuestList")
        .from('GuestList as G')
        .whereRaw(
            'LOWER(G.guestName) LIKE ?',
            `%${searches.search_query.toLowerCase()}%`
        )
        .select('*')
    // .join('GuestList', "GL.id", "GuestList.id")
    // .join('Events', "Events.id", "GuestLink.id")
    // .join('Tables', "Tables.id", "GuestLink.id")
    // .join('FoodList', "FoodList.id", "GuestLink.id")
    // .join('DrinkList', "DrinkList.id", "GuestLink.id")
    // .select("GL.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table", "Events.eventName")
}

const findAllGuest = (event) => {
    return db('Events')
        .from('GuestLink as G')
        .where("G.guestEvent_id", "=", event)
        .join(" Events as E", "G.id", "E.id")
        .leftJoin('Tables', "Tables.id", "G.id")
        .leftJoin('FoodList', "FoodList.id", "G.id")
        .leftJoin('DrinkList', "DrinkList.id", "G.id")
        .leftJoin('GuestList', "GuestList.id", "G.id")
        .select("E.id", "G.guest_id", "GuestList.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table")
}

module.exports = {
    addGuest,
    findGuestByName,
    findGuestById,
    findAllGuest

}