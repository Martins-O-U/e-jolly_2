
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('FoodList').del()
    .then(function () {
      // Inserts seed entries
      return knex('FoodList').insert([
        { id: 1, foodName: 'Rice', eventFood_id: 1 },
        { id: 2, foodName: 'Yam', eventFood_id: 2 },
        { id: 3, foodName: 'Fish', eventFood_id: 1 },
        { id: 4, foodName: 'Chicken', eventFood_id: 2 },
        { id: 5, foodName: 'PepperedSoup', eventFood_id: 2 },
        { id: 6, foodName: 'Afang', eventFood_id: 1 }
      ]);
    });
};
