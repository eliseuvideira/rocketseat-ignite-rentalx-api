const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.raw(`
    create function set_updated_at()
    returns trigger
    as $$
    begin
      NEW.updated_at = now();
      return NEW;
    end;
    $$ language plpgsql
  `);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.raw("drop function set_updated_at;");
};
