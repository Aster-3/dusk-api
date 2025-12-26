import type { Request, Response } from "express";
import { UserService } from "../services/user-service.js";
import { error } from "node:console";

const userService = new UserService();

export class UserController {
  getAll = async (req: Request, res: Response) => {
    try {
      const users = await userService.findAllUsers();
      const { id, title, type } = req.query;
      if (id) {
        throw new Error("İd is Not a Query Parameter!");
      }
      console.log(title, type);
      if (title) console.log("var");
      console.log(typeof title, typeof type);
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json("Hata: " + error.stack);
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      console.log(id);
      if (!id) throw new Error();
      console.log("Geldi");
      const user = await userService.findUserById(id);
      console.log("user: " + user);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { username, nickname, email, counrtyId } = req.body;
      if (!username || !nickname || !email || !counrtyId) {
        res
          .status(500)
          .send("Username, nickname, email and countryId are Required");
        return;
      }
      await userService.createUser(username, nickname, email, counrtyId);
      res.send(username);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  };
}
