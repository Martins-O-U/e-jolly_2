
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Tables').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tables').insert([
        { id: 1, table: 1, eventTable_id: 1 },
        { id: 2, table: 1, eventTable_id: 1 },
        { id: 3, table: 2, eventTable_id: 1 },
        { id: 4, table: 3, eventTable_id: 2 },
        { id: 5, table: 2, eventTable_id: 2 }
      ]);
    });
};
