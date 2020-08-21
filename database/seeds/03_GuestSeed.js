
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('InvitedGuestList').del()
    .then(function () {
      // Inserts seed entries
      return knex('InvitedGuestList').insert([
        { id: 1, Name: 'Jane Doe', GuestList_Id: 1 },
        { id: 2, Name: 'Peter Smith', GuestList_Id: 1 },
        { id: 3, Name: 'Ben Ronke', GuestList_Id: 1 },
        { id: 3, Name: 'Andrew Edet', GuestList_Id: 2 },
        { id: 3, Name: 'Adamu Okoro', GuestList_Id: 2 }
      ]);
    });
};
