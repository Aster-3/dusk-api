import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Series } from "./series.js";

export enum AnimeFormat {
  SERIES = "series",
  MOVIE = "movie",
}

@Entity("anime_details")
export class AnimeDetail {
  @PrimaryColumn("uuid", { name: "series_id" })
  seriesId!: string;

  @OneToOne(() => Series, (series) => series.animeDetails, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "series_id", referencedColumnName: "id" })
  series!: Series;

  @Index("idx_anime_details_format")
  @Column({ type: "enum", enum: AnimeFormat, enumName: "anime_format_enum" })
  format!: AnimeFormat;

  @Index("idx_anime_details_director", { unique: true })
  @Column({ type: "varchar", length: 255, nullable: true })
  director?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  screenplay?: string;
}
