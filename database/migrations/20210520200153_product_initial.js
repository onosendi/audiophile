exports.up = (knex) => knex.schema.createTable('product', (t) => {
  t.increments();
  t.string('name', 200).notNullable();
  t.string('shortName', 15).notNullable();
  t.string('slug', 200).notNullable();
  t.text('shortDescription').notNullable();
  t.text('longDescription').notNullable();
  t.decimal('price', 10, 2).unsigned().notNullable();
  t.boolean('new').defaultTo(false);
  t.integer('order').unsigned().notNullable();
  t
    .integer('categoryId')
    .unsigned()
    .references('id')
    .inTable('category')
    .onDelete('CASCADE')
    .notNullable();

  t.unique('slug');
  t.index(['slug', 'order']);
});

exports.down = (knex) => knex.schema.dropTableIfExists('product');
