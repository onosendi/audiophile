exports.up = (knex) => knex.schema.createTable('productImage', (t) => {
  t.increments();
  t.string('mobile').notNullable();
  t.string('tablet').notNullable();
  t.string('desktop').notNullable();
  t
    .integer('productId')
    .unsigned()
    .references('id')
    .inTable('product')
    .onDelete('CASCADE')
    .notNullable();
});

exports.down = (knex) => knex.schema.dropTableIfExists('productImage');
