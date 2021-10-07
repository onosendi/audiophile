exports.seed = async (knex) => {
  await knex('category').del();
  return knex('category').insert([
    { name: 'Headphones', slug: 'headphones', order: 1 },
    { name: 'Speakers', slug: 'speakers', order: 2 },
    { name: 'Earphones', slug: 'earphones', order: 3 },
  ]);
};
