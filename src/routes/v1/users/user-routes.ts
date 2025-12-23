import { Router } from "express";
import { UserController } from "../../../controllers/user-controller.js";

const router = Router();
const userController = new UserController();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);

router.post("/", userController.create);

export default router;
