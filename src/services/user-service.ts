import { UserRepository } from "../repositories/user-repository.js";
export class UserService {
  private userRepo = new UserRepository();

  createUser = async (name: string, email: string) => {
    return this.userRepo.create({ name, email });
  };

  findAllUsers = async () => {
    return this.userRepo.findAll();
  };

  findUserById = async (id: string) => {
    return this.userRepo.findById(id);
  };
}
