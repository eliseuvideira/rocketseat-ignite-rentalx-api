import { endpoint } from "@ev-fns/endpoint";
import { HttpError } from "@ev-fns/errors";
import csv from "csvtojson";
import fs from "fs";
import { database } from "../functions/database";
import { Categoria } from "../models/Categoria";

export const categoriasGetMany = endpoint(async (req, res) => {
  const items = await Categoria.find(database);

  res.status(200).json(items);
});

export const categoriasCreateOne = endpoint(async (req, res) => {
  const item = await Categoria.insertOne(database, req.body);

  res.status(201).json(item);
});

export const categoriasCreateMany = endpoint(async (req, res) => {
  if (!req.file) {
    throw new HttpError(400, `csv field is required`);
  }

  try {
    const stream = fs.createReadStream(req.file.path);
    const content = await csv({
      headers: ["nome", "descricao"],
      noheader: true,
    }).fromStream(stream);

    const items = await Categoria.insert(database, content);

    res.status(201).json(items);
  } finally {
    await fs.promises.unlink(req.file?.path).catch(console.error);
  }
});

export const categoriasGetOne = endpoint(async (req, res) => {
  const { categoria_id } = req.params as Record<string, any>;

  const item = await Categoria.findOne(database, { $eq: { categoria_id } });

  if (!item) {
    throw new HttpError(404, "Not found");
  }

  res.status(200).json(item);
});

export const categoriasUpdateOne = endpoint(async (req, res) => {
  const { categoria_id } = req.params as Record<string, any>;

  let item = await Categoria.findOne(database, { $eq: { categoria_id } });

  if (!item) {
    throw new HttpError(404, "Not found");
  }

  item = await Categoria.updateOne(database, item, req.body);

  res.status(200).json(item);
});

export const categoriasDeleteOne = endpoint(async (req, res) => {
  const { categoria_id } = req.params as Record<string, any>;

  let item = await Categoria.findOne(database, { $eq: { categoria_id } });

  if (!item) {
    throw new HttpError(404, "Not found");
  }

  await Categoria.deleteOne(database, item);

  res.status(204).end();
});
