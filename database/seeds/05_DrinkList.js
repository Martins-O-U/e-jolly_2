
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('DrinkList').del()
    .then(function () {
      // Inserts seed entries
      return knex('DrinkList').insert([
        { id: 1, drinkName: 'Star', eventDrink_id: 1 },
        { id: 2, drinkName: 'Guiness', eventDrink_id: 1 },
        { id: 3, drinkName: 'Malt', eventDrink_id: 2 }
      ]);
    });
};
