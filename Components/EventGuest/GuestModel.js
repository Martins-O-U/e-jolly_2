const db = require("../../database/db-config");


const addGuest = (guest) => {
    return db("GuestList").insert(guest, "id")
        .then(ids => {
            const [id] = ids;
            return findAddedGuest(id);
        })
}

const linkGuest = links => {
    return db('GuestLink').insert(links, "id")
        .then(ids => {
            const [id] = ids;
            return findAddedGuest(id)
        })
}
const findAddedGuest = (id) => {
    return db('GuestList').where({ id: id }).select('*')
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

const findGuestByName = (searchTerms) => {
    return db("GuestList")
        .from('GuestList as gl')
        .whereRaw(
            'LOWER(gl.guestName) LIKE ?',
            `%${searchTerms.search_query.toLowerCase()}%`
        )
        .join('Events', "gl.id", "Events.id")
        .select("*")
}

const findAllGuest = (event) => {
    return db('Events')
        .from('GuestLink as g')
        .where("g.guestEvent_id", "=", event)
        .join(" Events as e", "g.id", "e.id")
        .leftJoin('Tables', "Tables.id", "g.id")
        .leftJoin('FoodList', "FoodList.id", "g.id")
        .leftJoin('DrinkList', "DrinkList.id", "g.id")
        .leftJoin('GuestList', "GuestList.id", "g.id")
        .select("e.id", "g.guest_id", "GuestList.guestName", "DrinkList.drinkName", "FoodList.foodName", "Tables.table")
}
const deleteGuestName = (id) => {
    return db('GuestList')
        .where({ id })
        .del();
}

const updateGuestName = (id, changes) => {
    return db('GuestList')
        .where({ id })
        .update(changes);
}

module.exports = {
    addGuest,
    findGuestByName,
    findGuestById,
    findAllGuest,
    deleteGuestName,
    updateGuestName,
    linkGuest

}