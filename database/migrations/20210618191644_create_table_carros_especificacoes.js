const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable("carros_especificacoes", (table) => {
    table.integer("carro_id").notNullable();
    table.integer("especificacao_id").notNullable();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.primary(["carro_id", "especificacao_id"]);
    table
      .foreign("carro_id")
      .references("carro_id")
      .inTable("carros")
      .onDelete("cascade")
      .onUpdate("cascade");
    table
      .foreign("especificacao_id")
      .references("especificacao_id")
      .inTable("especificacoes")
      .onDelete("cascade")
      .onUpdate("cascade");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("carros_especificacoes");
};
