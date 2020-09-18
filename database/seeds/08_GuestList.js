
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, guestName: 'Philips Andrew', invitedNumber: 2, guestEvent_id: 1 },
        { id: 2, guestName: 'Steve Adams', invitedNumber: 1, guestEvent_id: 1 },
        { id: 3, guestName: 'Jack Smith', invitedNumber: 3, guestEvent_id: 1 }
      ]);
    });
};
