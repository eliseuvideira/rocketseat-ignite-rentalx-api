const { Knex } = require("knex");

const { setUpdatedAt } = require("../functions/setUpdatedAt");

/**
 * @param {Knex} knex
 */
exports.up = async function (knex) {
  await knex.schema.createTable("categorias", (table) => {
    table.increments("categoria_id").primary();
    table.text("nome").notNullable();
    table.text("descricao").notNullable();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
  });

  await setUpdatedAt(knex, "categorias");
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("categorias");
};
