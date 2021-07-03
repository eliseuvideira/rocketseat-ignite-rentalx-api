import { body, params } from "@ev-fns/validation";
import { Router } from "express";
import {
  categoriasCreateOne,
  categoriasDeleteOne,
  categoriasGetMany,
  categoriasGetOne,
  categoriasUpdateOne,
} from "../endpoints/categorias";
import {
  categoriasCreateOneBody,
  categoriasDeleteOneParams,
  categoriasGetOneParams,
  categoriasUpdateOneBody,
  categoriasUpdateOneParams,
} from "../validations/categorias";

const router = Router();

router.get("/categorias", categoriasGetMany);

router.post("/categorias", body(categoriasCreateOneBody), categoriasCreateOne);

router.get(
  "/categorias/:categoria_id",
  params(categoriasGetOneParams),
  categoriasGetOne
);

router.patch(
  "/categorias/:categoria_id",
  params(categoriasUpdateOneParams),
  body(categoriasUpdateOneBody),
  categoriasUpdateOne
);

router.delete(
  "/categorias/:categoria_id",
  params(categoriasDeleteOneParams),
  categoriasDeleteOne
);

export default router;
