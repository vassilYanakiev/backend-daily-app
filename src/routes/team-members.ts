import { Router } from "express";
import validate from "../middleware/validate";
import { getTeamHandler } from "../controllers/team-members";
import fs from "fs";

const router = Router();

// router.get("/team-members", (req: Request, res: Response) => {
//   fs.readFile("./src/team-members.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Internal Server Error");
//     } else {
//       const jsonData = JSON.parse(data);
//       return res.json(jsonData);
//     }
//   });
// });

router.get("/team-members", getTeamHandler);

export { router as teamMembersRouter };
