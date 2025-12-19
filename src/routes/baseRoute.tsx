import { Router } from "express";
import { basePathController } from "../controllers/base-path-controller.js";

const router = Router();

router.get("/", basePathController);

export default router;
