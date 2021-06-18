const Knex = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  const DATABASE_NAME = knex.client.config.connection.database;
  const TIMEZONE = "America/Sao_Paulo";

  await knex.raw(`ALTER DATABASE ${DATABASE_NAME} SET timezone='${TIMEZONE}';`);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  const DATABASE_NAME = knex.client.config.connection.database;

  await knex.raw(`ALTER DATABASE ${DATABASE_NAME} SET timezone='Etc/UTC';`);
};
