const knex = require('knex');
const pg = require('pg');

pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value) => Number(value));

const config = require('../../knexfile');

module.exports = knex(config);
