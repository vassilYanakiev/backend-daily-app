import express, { Request, Response } from "express";

const router = express.Router();

router.get("/auth/signup", (req: Request, res: Response) => {
  res.send("Hello from signup");
});

export default router;
