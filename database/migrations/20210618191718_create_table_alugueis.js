const { Knex } = require("knex");

const { setUpdatedAt } = require("../functions/setUpdatedAt");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable("alugueis", (table) => {
    table.increments("aluguel_id").primary();
    table.integer("carro_id").notNullable();
    table.integer("usuario_id").notNullable();
    table.dateTime("data_inicio").notNullable();
    table.dateTime("data_termino");
    table.dateTime("data_estimada_retorno").notNullable();
    table.decimal("valor_aluguel").notNullable();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
  });

  await setUpdatedAt(knex, "alugueis");

  await knex.raw(`
    alter table alugueis
    add constraint ck_alugueis_valor_aluguel check (valor_aluguel >= 0.0);
  `);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("alugueis");
};
