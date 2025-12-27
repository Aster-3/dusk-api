export interface ErrorFields {
  [key: string]: string;
}

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  fields?: ErrorFields | undefined;

  constructor(message: string, statusCode: number, fields?: ErrorFields) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.fields = fields;
  }
}
