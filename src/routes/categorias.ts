import { Router } from "express";
import {
  categoriasCreateOne,
  categoriasDeleteOne,
  categoriasGetMany,
  categoriasGetOne,
  categoriasUpdateOne,
} from "../endpoints/categorias";

const router = Router();

router.get("/categorias", categoriasGetMany);

router.post("/categorias", categoriasCreateOne);

router.get("/categorias/:categoria_id", categoriasGetOne);

router.patch("/categorias/:categoria_id", categoriasUpdateOne);

router.delete("/categorias/:categoria_id", categoriasDeleteOne);

export default router;
