const Knex = require("knex");

/**
 * @param {Knex} knex
 * @param {string} table
 * @param {string} field
 */
exports.setUpdatedAt = async (
  knex,
  table,
  trigger = `${table}_set_updated_at`
) => {
  await knex.raw(`
    create trigger ${trigger}
    before update on ${table}
    for each row
    execute procedure set_updated_at();
  `);
};

/**
 * @param {Knex} knex
 * @param {string} table
 * @param {string} field
 */
exports.dropUpdatedAt = async (
  knex,
  table,
  trigger = `${table}_set_updated_at`
) => {
  await knex.raw(`drop trigger ${trigger} on ${table};`);
};
