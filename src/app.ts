import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const app = express();

// Enable All CORS Requests (for development only)
app.use(cors());

app.get("/team-members", (req: Request, res: Response) => {
  fs.readFile("./src/team-members.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
