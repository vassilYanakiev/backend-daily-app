import { Router } from "express";
import { validate } from "../middleware/validate";
import { getTeamMembersSchema } from "../schemas/team-members-schema";
import { getTeamHandler } from "../controllers/team-members";

const router = Router();

router
  .route("/team-members")
  .get(validate(getTeamMembersSchema), getTeamHandler);

export { router as teamMembersRouter };
