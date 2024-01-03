import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import Model from "./base-model";
import { TeamMembers } from "./team-members";

@Entity("tasks")
export class Tasks extends Model {
  @Column()
  task_name: string;

  @ManyToOne(() => TeamMembers)
  @JoinColumn({ name: "user_assigned" })
  user_assigned: string;
}
