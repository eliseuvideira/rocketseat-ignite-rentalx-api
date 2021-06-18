const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable("carros_imagens", (table) => {
    table.integer("carro_id").notNullable();
    table.text("imagem_id").notNullable();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.primary(["carro_id", "imagem_id"]);
    table
      .foreign("carro_id")
      .references("carro_id")
      .inTable("carros")
      .onDelete("cascade")
      .onUpdate("cascade");
    table
      .foreign("imagem_id")
      .references("imagem_id")
      .inTable("imagens")
      .onDelete("cascade")
      .onUpdate("cascade");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("carros_imagens");
};
