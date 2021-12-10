
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('footballers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('footballers').insert([
        {id: 1, name: 'Kylian Mbappe'},
        {id: 2, name: 'Lionel Messi'},
        {id: 3, name: 'Rose Lavelle'}
      ]);
    });
};
