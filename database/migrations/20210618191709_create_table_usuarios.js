const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable("usuarios", (table) => {
    table.increments("usuario_id").primary();
    table.text("nome").notNullable();
    table.text("usuario").notNullable();
    table.text("senha").notNullable();
    table.text("email").notNullable();
    table.text("carteira").notNullable();
    table.boolean("is_admin").notNullable();
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("usuarios");
};
