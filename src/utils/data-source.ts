require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "config";

const postgresConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>("postgresConfig");

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: "postgres",
  synchronize: true,
  logging: true,
  entities: ["src/entities/**/*{.ts,.js}"],
  migrations: ["src/migrations/**/*{.ts,.js}"],
});

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "test",
//   password: "test",
//   database: "test",
//   synchronize: true,
//   logging: true,
//   entities: [TeamMembers],
//   migrations: ["src/migrations/**/*{.ts,.js}"],
//   subscribers: ["src/subscribers/**/*{.ts,.js}"],
// });
