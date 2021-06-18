import { Router } from "express";
import { indexGetOne } from "../endpoints";

const router = Router();

router.get("/", indexGetOne);

export default router;
