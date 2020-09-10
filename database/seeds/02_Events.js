
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Events').del()
    .then(function () {
      // Inserts seed entries
      return knex('Events').insert([
        { id: 1, eventName: 'Ali & Simbi', event_id: 1 },
        { id: 2, eventName: 'Flex Without End', event_id: 2 },
        { id: 3, eventName: "Let's Get Together", event_id: 1 },
      ]);
    });
};
