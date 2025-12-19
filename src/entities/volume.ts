import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Series } from "./Series.js";
import { Chapter } from "./chapter.js";

@Entity("volumes")
export class Volume {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "varchar", length: 255 })
  title!: string;

  @Column({ type: "int" })
  number!: number;

  @Column({
    name: "cover_image_url",
    type: "varchar",
    length: 500,
    nullable: true,
  })
  coverImgUrl?: string;

  @ManyToOne(() => Series, (series) => series.volumes, { onDelete: "CASCADE" })
  @JoinColumn({ name: "series_id", referencedColumnName: "id" })
  series!: Series;

  @OneToMany(() => Chapter, (chapter) => chapter.volume)
  chapters!: Chapter[];
}
