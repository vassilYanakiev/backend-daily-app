import getTeamMembers from "../services/team-members";
import { Request, Response, NextFunction } from "express";

export const getTeamHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { teamId } = req.query;
    const teamMembers = await getTeamMembers(teamId as string);

    if (!teamMembers) {
      return res.status(404).json({ message: "Team members not found" });
    }

    res.status(200).json(teamMembers);
  } catch (error) {
    next(error);
  }
};
