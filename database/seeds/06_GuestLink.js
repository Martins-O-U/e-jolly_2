
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('GuestList').del()
    .then(function () {
      // Inserts seed entries
      return knex('GuestList').insert([
        { id: 1, guestEvent: 1, guestLinkEvent_id: 1, guestTable_id: 1, guestFood: 1, guestDrink: 1 },
        { id: 2, guestEvent: 2, guestLinkEvent_id: 1, guestTable_id: 1, guestFood: 6, guestDrink: 2 },
        { id: 3, guestEvent: 3, guestLinkEvent_id: 1, guestTable_id: 2, guestFood: 2, guestDrink: 3 }
      ]);
    });
};
