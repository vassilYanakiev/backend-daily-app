import { Router } from "express";
import { validate } from "../middleware/validate";
import {
  getTeamMembersSchema,
  addTeamMembertSchema,
} from "../schemas/team-members-schema";
import {
  getTeamHandler,
  addTeamMmberHandler,
} from "../controllers/team-members";

const router = Router();

router
  .route("/team-members")
  .get(validate(getTeamMembersSchema), getTeamHandler)
  .post(validate(addTeamMembertSchema), addTeamMmberHandler);

export { router as teamMembersRouter };
