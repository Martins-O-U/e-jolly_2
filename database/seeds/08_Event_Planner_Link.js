
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('EventPlannerLink').del()
    .then(function () {
      // Inserts seed entries
      return knex('EventPlannerLink').insert([
        { id: 1, event_id: 1, eventPlanner_id: 1 },
        { id: 2, event_id: 2, eventPlanner_id: 2 },
        { id: 3, event_id: 3, eventPlanner_id: 1 }
      ]);
    });
};
