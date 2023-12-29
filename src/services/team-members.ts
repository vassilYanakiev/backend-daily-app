import { TeamMembers } from "../entities/teams";
import { AppDataSource } from "../data-source";


const teamMembersRepository = AppDataSource.getRepository(TeamMembers);

export const getTeamMembers = async (teamId: string) => {
  const teamMembers = await teamMembersRepository.findBy({
    team_id: teamId,
  });
  return teamMembers;
};

export const addTeamMmber = async (input: Partial<TeamMembers>) => {
  return await teamMembersRepository.save(
    teamMembersRepository.create({ ...input })
  );
};
