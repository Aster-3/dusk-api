import { Router } from "express";
import { CountryController } from "../../../controllers/country-controller.js";

const router = Router();

const countryController = new CountryController();

router.get("/", countryController.getAll);

router.post("/", countryController.create);

export default router;
