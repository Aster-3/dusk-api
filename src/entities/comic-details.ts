import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Series } from "./Series.js";

export enum ComicFormat {
  MANGA = "manga",
  MANHWA = "manhwa",
  MANHUA = "manhua",
}
@Entity("comic-details")
export class ComicDetail {
  @PrimaryColumn("uuid", { name: "series_id" })
  seriesId!: string;

  @OneToOne(() => Series, (series) => series.comicDetails, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "series_id", referencedColumnName: "id" })
  series!: Series;

  @Index("idx_comic_details_format")
  @Column({ type: "enum", enum: ComicFormat, enumName: "comic_format_enum" })
  format!: ComicFormat;

  @Column()
  illustrator?: string;
}
