const { Knex } = require("knex");

const { setUpdatedAt } = require("../functions/setUpdatedAt");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable("carros", (table) => {
    table.increments("carro_id").primary();
    table.text("nome").notNullable();
    table.text("descricao").notNullable();
    table.decimal("taxa_diaria").notNullable();
    table.boolean("disponivel").notNullable();
    table.text("placa").notNullable();
    table.decimal("valor_multa").notNullable();
    table.text("marca").notNullable();
    table.integer("categoria_id").notNullable();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
    table
      .foreign("categoria_id")
      .references("categoria_id")
      .inTable("categorias")
      .onDelete("cascade")
      .onUpdate("cascade");
  });

  await setUpdatedAt(knex, "carros");

  await knex.raw(`
    alter table carros
    add constraint ck_carros_taxa_diaria check (taxa_diaria >= 0.0);
  `);

  await knex.raw(`
    alter table carros
    add constraint ck_carros_valor_multa check (valor_multa >= 0.0);
  `);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("carros");
};
