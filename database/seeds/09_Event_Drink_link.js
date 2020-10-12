
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('EventDrinkLink').del()
    .then(function () {
      // Inserts seed entries
      return knex('EventDrinkLink').insert([
        { id: 1, event_id: 1, eventDrink_id: 1 },
        { id: 2, event_id: 1, eventDrink_id: 2 },
        { id: 3, event_id: 1, eventDrink_id: 1 },
        { id: 4, event_id: 2, eventDrink_id: 3 },
        { id: 5, event_id: 2, eventDrink_id: 1 },
      ]);
    });
};
