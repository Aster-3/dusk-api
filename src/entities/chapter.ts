import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Volume } from "./volume.js";

@Entity("chapters")
export class Chapter {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "varchar", length: 255 })
  title!: string;

  @Column({ type: "int" })
  number!: number;

  @ManyToOne(() => Volume, (volume) => volume.chapters, { onDelete: "CASCADE" })
  @JoinColumn({ name: "volume_id", referencedColumnName: "id" })
  volume!: Volume;
}
