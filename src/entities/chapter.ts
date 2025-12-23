import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Volume } from "./volume.js";

@Entity("chapters")
@Index("idx_chapter_volume_id", ["volume"])
export class Chapter {
  @PrimaryColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  title!: string;

  @Column({ type: "int" })
  number!: number;

  @ManyToOne(() => Volume, (volume) => volume.chapters, { onDelete: "CASCADE" })
  @JoinColumn({ name: "volume_id", referencedColumnName: "id" })
  volume!: Volume;
}
