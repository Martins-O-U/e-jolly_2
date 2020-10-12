
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('EventFoodLink').del()
    .then(function () {
      // Inserts seed entries
      return knex('EventFoodLink').insert([
        { id: 1, event_id: 1, eventFood_id: 1 },
        { id: 2, event_id: 1, eventFood_id: 2 },
        { id: 3, event_id: 1, eventFood_id: 3 },
        { id: 4, event_id: 2, eventFood_id: 4 },
        { id: 5, event_id: 2, eventFood_id: 3 }
      ]);
    });
};
