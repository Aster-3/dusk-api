import { AppError } from "./app-error.js";

export class SystemError extends AppError {
  constructor(message: string) {
    super(message, 500);
    this.name = "SystemError";
  }
}
