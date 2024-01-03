import { Column, Entity } from "typeorm";
import Model from "./base-model";

@Entity("teams")
export class Teams extends Model {
  @Column()
  team_name: string;

  @Column()
  team_id: string;
}
