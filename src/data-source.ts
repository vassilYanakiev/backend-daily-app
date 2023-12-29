import { DataSource } from "typeorm";
import { TeamMembers } from "./entities/teams";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [TeamMembers],
  migrations: ["src/migrations/**/*{.ts,.js}"],
  subscribers: ["src/subscribers/**/*{.ts,.js}"],
});
