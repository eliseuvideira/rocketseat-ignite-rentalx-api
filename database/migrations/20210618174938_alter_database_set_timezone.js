const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  const DATABASE_NAME = knex.client.config.connection.database;
  const TIMEZONE = "America/Sao_Paulo";

  await knex.raw(`alter database ${DATABASE_NAME} set timezone='${TIMEZONE}';`);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  const DATABASE_NAME = knex.client.config.connection.database;
  const TIMEZONE = "Etc/UTC";

  await knex.raw(`alter database ${DATABASE_NAME} set timezone='${TIMEZONE}';`);
};
