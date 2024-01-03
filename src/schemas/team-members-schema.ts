import { object, string, TypeOf } from "zod";

const params = {
  query: object({
    teamId: string(),
  }),
};

export const addTeamMembertSchema = object({
  body: object({
    name: string().min(1, "Name is required"),
    surname: string().min(1, "Surname is required"),
    role: string().min(1, "Role is required"),
    team_id: string().min(1, "Team Name is required"),
  }),
});

export const getTeamMembersSchema = object({
  ...params,
});

export type CreateTeamMemberInput = TypeOf<typeof addTeamMembertSchema>["body"];
