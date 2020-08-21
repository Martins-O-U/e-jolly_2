
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('EventPlannerList').del()
    .then(function () {
      // Inserts seed entries
      return knex('EventPlannerList').insert([
        { id: 1, Name: 'BlinxEvents', Email: 'blinxevents@mail.com', PhoneNumber: 12345678 },
        { id: 2, Name: 'Sabinus', Email: 'sabinusandco@mail.com', PhoneNumber: 87654321 },
      ]);
    });
};
