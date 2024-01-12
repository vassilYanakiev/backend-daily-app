import express, { Request, Response } from "express";
import { loginUserSchema } from "../../schemas/auth-schemas";
import { loginUserHandler } from "../../controllers/auth";
import { validate } from "../../middleware/validate";

const router = express.Router();

router.post("/auth/signin", validate(loginUserSchema), loginUserHandler);

export default router;
