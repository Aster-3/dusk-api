import { Router } from "express";
const router = Router();

import userRoutes from "./users/user-routes.js";

router.use("/users", userRoutes);

export default router;
