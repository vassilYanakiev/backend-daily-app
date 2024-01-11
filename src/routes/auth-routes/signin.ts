import express, { Request, Response } from "express";

const router = express.Router();

router.get("/auth/signin", (req: Request, res: Response) => {
  res.send("Hello from signin");
});

export default router;
