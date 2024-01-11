import express, { Request, Response } from "express";

const router = express.Router();

router.get("/auth/refresh", (req: Request, res: Response) => {
  res.send("Hello from refresh");
});

export default router;
