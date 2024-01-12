import { CookieOptions, NextFunction, Request, Response } from "express";
import { User } from "../entities/users";
import {
  findUserByEmail,
  // signTokens,
} from "../services/auth-service";
import { LoginUserInput } from "../schemas/auth-schemas";
import AppError from "../errors/app-error";

export const loginUserHandler = async (
  req: Request<{}, {}, LoginUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail({ email });

    // 1. Check if user exist
    if (!user) {
      return next(new AppError(400, "Invalid email or password"));
    }

    //2. Check if password is valid
    if (!(await User.comparePasswords(password, user.password))) {
      return next(new AppError(400, "Invalid email or password"));
    }

    // 6. Send response
    res.status(200).json({
      status: "success",
    });
  } catch (err: any) {
    next(err);
  }
};
