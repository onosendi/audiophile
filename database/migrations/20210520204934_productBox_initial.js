exports.up = (knex) => knex.schema.createTable('productBox', (t) => {
  t.string('item').notNullable();
  t.integer('quantity').unsigned().notNullable();
  t.integer('order').unsigned().notNullable();
  t
    .integer('productId')
    .unsigned()
    .references('id')
    .inTable('product')
    .onDelete('CASCADE')
    .notNullable();
  t.index('order');
});

exports.down = (knex) => knex.schema.dropTableIfExists('productBox');
