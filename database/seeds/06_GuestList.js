
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('GuestList').del()
    .then(function () {
      // Inserts seed entries
      return knex('GuestList').insert([
        { id: 1, guestName: 'Ali Tunde', guestEvent_id: 1, guestTable_id: 1, guestFood: 1, guestDrink: 1 },
        { id: 2, guestName: 'Eze Okoro', guestEvent_id: 1, guestTable_id: 1, guestFood: 6, guestDrink: 2 },
        { id: 3, guestName: 'James John', guestEvent_id: 2, guestTable_id: 2, guestFood: 2, guestDrink: 3 }
      ]);
    });
};
