import { Column, Entity } from "typeorm";
import Model from "./model.entity";

@Entity("teamMember")
export class TeamMembers extends Model {
  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  role: string;
}
