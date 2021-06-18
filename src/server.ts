import dotenv from "@ev-fns/dotenv";

dotenv(undefined, ({ NODE_ENV, npm_package_version }) => {
  console.info(`🌟 ${NODE_ENV}`);
  console.info(`🔖 ${npm_package_version}`);
});

import app from "./app";
import server from "@ev-fns/server";

const PORT = +process.env.PORT;

server({
  app,
  port: PORT,
  after: async () => {
    console.info(`🚀 http://localhost:${PORT}`);
  },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
