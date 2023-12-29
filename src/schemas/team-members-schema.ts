import { object, string, TypeOf } from "zod";

const params = {
  query: object({
    teamId: string(),
  }),
};

export const addTeamMembertSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    surname: string({
      required_error: "Surname is required",
    }),
    role: string({
      required_error: "Role is required",
    }),
    team_id: string({
      required_error: "Team id is required",
    }),
  }),
});

export const getTeamMembersSchema = object({
  ...params,
});

export type CreateTeamMemberInput = TypeOf<typeof addTeamMembertSchema>["body"];
