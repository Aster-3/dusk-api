import { UserRepository } from "../repositories/user-repository.js";
import { uuidv7 } from "uuidv7";
export class UserService {
  private userRepo = new UserRepository();

  createUser = async (
    username: string,
    nickname: string,
    email: string,
    countryId: number
  ) => {
    return this.userRepo.create({
      id: uuidv7(),
      username,
      nickname,
      email,
      country: { id: countryId },
    });
  };

  findAllUsers = async () => {
    return this.userRepo.findAll();
  };

  findUserById = async (id: string) => {
    return this.userRepo.findById(id);
  };
}
