import { endpoint } from "@ev-fns/endpoint";
import { HttpError } from "@ev-fns/errors";
import csv from "csvtojson";
import fs from "fs";

export const categoriasGetMany = endpoint(async (req, res) => {
  throw new HttpError(501, "Not implemented");
});

export const categoriasCreateOne = endpoint(async (req, res) => {
  throw new HttpError(501, "Not implemented");
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

    console.log(content);

    throw new HttpError(501, "Not implemented");
  } finally {
    await fs.promises.unlink(req.file?.path).catch(console.error);
  }
});

export const categoriasGetOne = endpoint(async (req, res) => {
  throw new HttpError(501, "Not implemented");
});

export const categoriasUpdateOne = endpoint(async (req, res) => {
  throw new HttpError(501, "Not implemented");
});

export const categoriasDeleteOne = endpoint(async (req, res) => {
  throw new HttpError(501, "Not implemented");
});
