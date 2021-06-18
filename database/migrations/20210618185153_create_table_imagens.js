const { Knex } = require("knex");

const { setUpdatedAt } = require("../functions/setUpdatedAt");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable("imagens", (table) => {
    table.text("imagem_id").notNullable().primary();
    table.text("nome").notNullable();
    table.text("mime_type").notNullable();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
  });

  await setUpdatedAt(knex, "imagens");
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("imagens");
};
