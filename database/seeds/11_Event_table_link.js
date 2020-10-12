
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('EventTableLink').del()
    .then(function () {
      // Inserts seed entries
      return knex('EventTableLink').insert([
        { id: 1, event_id: 1, eventTable_id: 1 },
        { id: 2, event_id: 1, eventTable_id: 2 },
        { id: 3, event_id: 1, eventTable_id: 2 }
      ]);
    });
};
