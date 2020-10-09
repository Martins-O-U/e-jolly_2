
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Events').del()
    .then(function () {
      // Inserts seed entries
      return knex('Events').insert([
        { id: 1, eventName: 'Ali_Simbi' },
        { id: 2, eventName: 'Flex_Things' },
        { id: 3, eventName: 'Owa' },
      ]);
    });
};
