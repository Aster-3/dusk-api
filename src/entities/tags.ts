import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./_base-entity.js";

@Entity("tags")
export class Tags extends BaseEntity {
  @Column({ type: "varchar", length: 50, unique: true })
  name!: string;

  // CREATED_BY USER FOREİGN KEY EKLENECEK
}
