import crypto from "crypto";
import { Entity, Column, Index, BeforeInsert, OneToMany } from "typeorm";
import bcrypt from "bcryptjs";
import Model from "./base-model";

export enum RoleEnumType {
  USER = "user",
  ADMIN = "admin",
}

@Entity("users")
export class User extends Model {
  @Column()
  name: string;

  @Index("email_index")
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: RoleEnumType,
    default: RoleEnumType.USER,
  })
  role: RoleEnumType.USER;

  @Column({
    default: false,
  })
  verified: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  static async comparePasswords(
    candidatePassword: string,
    hashedPassword: string
  ) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }

  toJSON() {
    return {
      ...this,
      password: undefined,
      verified: undefined,
      verificationCode: undefined,
    };
  }
}
