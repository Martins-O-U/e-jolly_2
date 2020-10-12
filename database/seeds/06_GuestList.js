
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('GuestList').del()
    .then(function () {
      // Inserts seed entries
      return knex('GuestList').insert([
        { id: 1, guestName: 'Philips Andrew', invitedNumber: 2, eventGuest_id: 1 },
        { id: 2, guestName: 'Steve Adams', invitedNumber: 1, eventGuest_id: 1 },
        { id: 3, guestName: 'Jack Smith', invitedNumber: 3, eventGuest_id: 1 }
      ]);
    });
};
