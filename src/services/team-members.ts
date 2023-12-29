import { TeamMembers } from "../entities/teams";
import { AppDataSource } from "../data-source";

const getTeamMembers = async () => {
  const teamMembers = await AppDataSource.getRepository(TeamMembers).find();
  return teamMembers;
};

export default getTeamMembers;
