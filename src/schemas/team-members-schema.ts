import { object, string, number } from "zod";

const params = {
  query: object({
    teamId: string(),
  }),
};

export const getTeamMembersSchema = object({
  ...params,
});
