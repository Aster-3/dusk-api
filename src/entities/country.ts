import { Column, Entity, Index, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "./user.js";

@Entity("countries")
export class Country {
  @PrimaryColumn("uuid")
  id!: string;

  @Index("idx_countries_name", { unique: true })
  @Column({ type: "varchar", length: 255 })
  name!: string;

  @OneToMany(() => User, (user) => user.country)
  users!: User[];
}
