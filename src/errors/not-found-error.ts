import { AppError } from "./app-error.js";

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 400);
    this.name = "NotFoundError";
  }
}
