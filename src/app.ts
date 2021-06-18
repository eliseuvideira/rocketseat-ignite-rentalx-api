import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { exception, notFound } from "@ev-fns/errors";
import fs from "fs";
import path from "path";

const app = express();

app.use(cors());
app.use(json());

const routes = fs.readdirSync(path.join(__dirname, "routes"));
for (const route of routes) {
  app.use(require(path.join(__dirname, "routes", route)).default);
}

app.use(notFound);
app.use(exception);

export default app;
