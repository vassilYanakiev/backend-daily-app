export default class AppError extends Error {
  status: string;
  isOperational: boolean;
  constructor(public statusCode: number = 500, public message: string) {
    super(message);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
