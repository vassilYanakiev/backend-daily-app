import { Request, Response, NextFunction } from "express";
import { getTeams, getTeamByName } from "../services/teams";

export const getTeamsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const teams = await getTeams();

    if (!teams) {
      return res.status(404).json({ message: "No teams registered" });
    }

    res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
};

export const getTeamByNameHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { teamName } = req.params;
    const team = await getTeamByName(teamName);

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};
