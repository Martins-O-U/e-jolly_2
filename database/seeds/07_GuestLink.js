
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('GuestLink').del()
    .then(function () {
      // Inserts seed entries
      return knex('GuestLink').insert([
        { id: 1, guest_id: 1, guestEvent_id: 1, guestTable_id: 1, guestFood: 1, guestDrink: 1 },
        { id: 2, guest_id: 2, guestEvent_id: 1, guestTable_id: 1, guestFood: 6, guestDrink: 2 },
        { id: 3, guest_id: 3, guestEvent_id: 1, guestTable_id: 2, guestFood: 2, guestDrink: 3 }
      ]);
    });
};
