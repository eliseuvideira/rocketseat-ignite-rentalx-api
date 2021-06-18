const Knex = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION "uuid-ossp";');
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.raw('DROP EXTENSION "uuid-ossp";');
};
