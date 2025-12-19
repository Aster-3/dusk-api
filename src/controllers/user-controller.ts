import type { Request, Response } from "express";
import { UserService } from "../services/user-service.js";

const userService = new UserService();

export class UserController {
  getAll = async (req: Request, res: Response) => {
    try {
      const users = await userService.findAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await userService.findUserById(id!);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  };
}
