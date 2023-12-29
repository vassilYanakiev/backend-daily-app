import { TeamMembers } from "../entities/teams";
import { AppDataSource } from "../data-source";

const getTeamMembers = async (teamId: string) => {
  const teamMembers = await AppDataSource.getRepository(TeamMembers).findBy({
    team_id: teamId,
  });
  return teamMembers;
};

export default getTeamMembers;
