import { DataSource } from "typeorm";
import { User } from "./entities/User.js";
import { getEnv } from "./helpers/get-env.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: getEnv("DB_HOST"),
  port: 5432,
  username: getEnv("DB_USER"),
  password: getEnv("DB_PASSWORD"),
  database: getEnv("DB_NAME"),
  synchronize: true,
  logging: false,
  entities: [User],
});
