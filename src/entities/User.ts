import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Country } from "./country.js";
import { Like } from "./like.js";
import { BaseEntity } from "./_base-entity.js";

@Entity("users")
export class User extends BaseEntity {
  @Index("idx_user_username", { unique: true })
  @Column({ type: "varchar", length: 15 })
  username!: string;

  @Column({ type: "varchar", length: 20 })
  nickname!: string;

  @Index("idx_user_email", { unique: true })
  @Column({ type: "varchar", length: 150 })
  email!: string;

  @ManyToOne(() => Country, (country) => country.users, {
    nullable: false,
    onDelete: "RESTRICT",
  })
  @JoinColumn({ name: "country_id", referencedColumnName: "id" })
  country!: Country;

  @OneToMany(() => Like, (like) => like.user)
  likes?: Like[];
}
