const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const { env } = process;

module.exports = {
  client: 'pg',
  connection: {
    database: env.DB_NAME,
    host: env.DB_HOST,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    user: env.DB_USER,
  },
  debug: env.DB_DEBUG === 'true',
  migrations: {
    directory: path.resolve(__dirname, 'database/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'database/seeds'),
  },
};
