import { object, string } from "zod";

const params = {
  params: object({
    teamName: string(),
  }),
};

export const getTeamsSchema = object({});

export const getTeamByNameSchema = object({
  ...params,
});
