
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Events').del()
    .then(function () {
      // Inserts seed entries
      return knex('Events').insert([
        { id: 1, eventName: 'Ali_Simbi', eventPlanner_id: 1 },
        { id: 2, eventName: 'Flex_Things', eventPlanner_id: 2 },
        { id: 3, eventName: 'Owa', eventPlanner_id: 1 },
      ]);
    });
};
