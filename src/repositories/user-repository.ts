import { AppDataSource } from "../data-source.js";
import { User } from "../entities/User.js";
import { BaseRepository } from "./_base-repository.js";

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(AppDataSource.getRepository(User));
  }
}
