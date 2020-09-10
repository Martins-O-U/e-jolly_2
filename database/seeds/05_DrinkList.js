
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('DrinkList').del()
    .then(function () {
      // Inserts seed entries
      return knex('DrinkList').insert([
        { id: 1, foodName: 'Star', eventDrink_id: 1 },
        { id: 2, foodName: 'Guiness', eventDrink_id: 1 },
        { id: 3, foodName: 'Malt', eventDrink_id: 2 }
      ]);
    });
};
