import { CustomError } from "./custom-error";

export class LoginError extends CustomError {
  statusCode = 400;

  constructor() {
    super("Invalid email or password");

    Object.setPrototypeOf(this, LoginError.prototype);
  }

  serializeErrors() {
    return [{ message: "Invalid email or password" }];
  }
}
