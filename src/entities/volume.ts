import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Series } from "./series.js";
import { Chapter } from "./chapter.js";

@Entity("volumes")
@Index("idx_volumes_series_id", ["series"])
export class Volume {
  @PrimaryColumn("uuid")
  id!: string;

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
