const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable("table_name", (table) => {});
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("table_name");
};
