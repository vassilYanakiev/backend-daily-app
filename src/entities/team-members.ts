import { Column, Entity } from "typeorm";
import Model from "./base-model";

@Entity("teamMembers")
export class TeamMembers extends Model {
  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  team_id: string;

  @Column()
  surname: string;
}
