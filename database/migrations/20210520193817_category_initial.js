exports.up = (knex) => knex.schema.createTable('category', (t) => {
  t.increments('id');
  t.string('name', 200).notNullable();
  t.string('slug', 200).notNullable();
  t.integer('order').unsigned().notNullable();

  t.unique('slug');
  t.index(['slug', 'order']);
});

exports.down = (knex) => knex.schema.dropTableIfExists('category');
