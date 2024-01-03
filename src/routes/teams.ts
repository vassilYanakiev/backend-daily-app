import { Router } from "express";
import { validate } from "../middleware/validate";
import { getTeamsSchema, getTeamByNameSchema } from "../schemas/teams-schema";
import { getTeamsHandler, getTeamByNameHandler } from "../controllers/teams";

const router = Router();

router
  .route("/teams/:teamName")
  .get(validate(getTeamByNameSchema), getTeamByNameHandler);

router.route("/teams").get(validate(getTeamsSchema), getTeamsHandler);

export { router as teamsRouter };
