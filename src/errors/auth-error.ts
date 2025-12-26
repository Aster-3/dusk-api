import { AppError } from "./app-error.js";

export class AuthError extends AppError {
  constructor(message: string) {
    super(message, 401);
    this.name = "AuthenticationError";
  }
}
