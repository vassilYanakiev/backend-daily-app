import { Teams } from "../entities/teams";
import { AppDataSource } from "../data-source";

const teamMembersRepository = AppDataSource.getRepository(Teams);

export const getTeams = async () => {
  const teams = await teamMembersRepository.find();
  return teams;
};

export const getTeamByName = async (teamName: string) => {
  const team = await teamMembersRepository.findBy({
    team_name: teamName,
  });
  return team;
};
