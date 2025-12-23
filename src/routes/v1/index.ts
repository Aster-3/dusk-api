import { Router } from "express";
const router = Router();

import userRoutes from "./users/user-routes.js";
import countryRoutes from "./countries/country-routes.js";

router.use("/users", userRoutes);
router.use(
  "/countries",
  (req, res, next) => {
    console.log("girdi");
    next();
  },
  countryRoutes
);

export default router;
