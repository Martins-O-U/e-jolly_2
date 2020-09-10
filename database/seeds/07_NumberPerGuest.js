
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('NumberPerGuest').del()
    .then(function () {
      // Inserts seed entries
      return knex('NumberPerGuest').insert([
        { id: 1, invitedPersons: 2, numberPerGuest_id: 1 },
        { id: 2, invitedPersons: 1, numberPerGuest_id: 2 },
        { id: 3, invitedPersons: 3, numberPerGuest_id: 3 }
      ]);
    });
};
