import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Series } from "./series.js";

export enum NovelFormat {
  WEBNOVEL = "webnovel",
  LIGHT_NOVEL = "light_novel",
  NOVEL = "novel",
}

@Entity("novel-details")
export class NovelDetail {
  @PrimaryColumn("uuid", { name: "series_id" })
  seriesId!: string;

  @OneToOne(() => Series, (series) => series.novelDetails, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "series_id", referencedColumnName: "id" })
  series!: Series;

  @Index("idx_novel_details_format")
  @Column({ type: "enum", enum: NovelFormat, enumName: "novel_format_enum" })
  format!: NovelFormat;
}
