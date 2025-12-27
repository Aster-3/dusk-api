import type { Request, Response, NextFunction } from "express";
import { AppError, type ErrorFields } from "../errors/app-error.js";
interface ErrorResponseType {
  message: string;
  fields?: ErrorFields;
}

export const GlobalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errResponse: ErrorResponseType = {
    message: err.message,
  };

  if (err instanceof AppError && err.isOperational) {
    if (err.fields !== undefined) {
      errResponse.fields = err.fields;
    }
    return res.status(err.statusCode).json({
      success: false,
      error: errResponse,
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    error: {
      message: "Internal Server Error",
    },
  });
};
