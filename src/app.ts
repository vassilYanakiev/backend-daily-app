import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { teamMembersRouter } from "./routes/team-members";
import { teamsRouter } from "./routes/teams";
import AppError from "./utils/appError";
import { AppDataSource } from "./utils/data-source";
import redisClient from "./utils/connectRedis";

dotenv.config();
const app = express();

AppDataSource.initialize()
  .then(() => {
    app.use(cors());
    app.use(express.json({ limit: "10kb" }));

    app.get("/api/v1/healthChecker", async (_, res: Response) => {
      const message = await redisClient.get("try");

      res.status(200).json({
        status: "success",
        message,
      });
    });

    app.use("/api/v1", teamMembersRouter);
    app.use("/api/v1", teamsRouter);
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}!`);
    });
  })
  .catch((error) => console.log(error));
