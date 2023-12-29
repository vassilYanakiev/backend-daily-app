import { Request, Response, NextFunction } from "express";
import { getTeamMembers, addTeamMmber } from "../services/team-members";
import { CreateTeamMemberInput } from "../schemas/team-members-schema";

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

export const addTeamMmberHandler = async (
  req: Request<{}, {}, CreateTeamMemberInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await addTeamMmber(req.body);

    res.status(201).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
