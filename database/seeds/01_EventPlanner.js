
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('EventPlanners').del()
    .then(function () {
      // Inserts seed entries
      return knex('EventPlanners').insert([
        { id: 1, phoneNumber: 123456, username: "Blinx", email: "blinx@mail.com", location: "Nigeria", password: "secret" },
        { id: 2, phoneNumber: 654321, username: "smith", email: "smithx@mail.com", location: "Lagos", password: "secret" },
      ]);
    });
};
