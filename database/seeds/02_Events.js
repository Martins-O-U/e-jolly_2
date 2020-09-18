
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Events').del()
    .then(function () {
      // Inserts seed entries
      return knex('Events').insert([
        { id: 1, eventName: 'Ali_Simbi', event_id: 1 },
        { id: 2, eventName: 'Flex_Things', event_id: 2 },
      ]);
    });
};
