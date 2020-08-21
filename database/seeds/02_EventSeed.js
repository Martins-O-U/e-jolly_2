
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('EventList').del()
    .then(function () {
      // Inserts seed entries
      return knex('EventList').insert([
        { id: 1, EventName: "Let's Go There", EventList_Id: 1 },
        { id: 2, EventName: "Wedding Party", EventList_Id: 2 },
        { id: 3, EventName: "Test Run", EventList_Id: 1 }
      ]);
    });
};
