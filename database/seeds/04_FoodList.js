
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('FoodList').del()
    .then(function () {
      // Inserts seed entries
      return knex('FoodList').insert([
        { id: 1, foodName: 'Rice' },
        { id: 2, foodName: 'Yam' },
        { id: 3, foodName: 'Fish' },
        { id: 4, foodName: 'Chicken' },
        { id: 5, foodName: 'PepperedSoup' },
        { id: 6, foodName: 'Afang' }
      ]);
    });
};
