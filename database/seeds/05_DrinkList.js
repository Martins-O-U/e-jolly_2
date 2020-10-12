
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('DrinkList').del()
    .then(function () {
      // Inserts seed entries
      return knex('DrinkList').insert([
        { id: 1, drinkName: 'Star' },
        { id: 2, drinkName: 'Guiness' },
        { id: 3, drinkName: 'Malt' },
        { id: 4, drinkName: 'Wine' },
        { id: 5, drinkName: 'Vodka' },
        { id: 6, drinkName: 'Cocktail' }
      ]);
    });
};
