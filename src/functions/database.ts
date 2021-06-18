import knex from "knex";
import path from "path";

const MIN_POOL = 2;
const MAX_POOL = 20;

export const database = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  pool: {
    min: MIN_POOL,
    max: MAX_POOL,
  },
  migrations: {
    directory: path.join(__dirname, "..", "..", "database", "migrations"),
  },
});
