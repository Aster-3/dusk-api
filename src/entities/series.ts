import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from "typeorm";
import { BaseEntity } from "./_base-entity.js";
import { AnimeDetail } from "./anime-details.js";
import { ComicDetail } from "./comic-details.js";
import { NovelDetail } from "./novel-details.js";
import { Organization } from "./organization.js";

export enum SeriesStatus {
  ONGOING = "ongoing",
  COMPLETED = "completed",
  STOPPED = "stopped",
  FUTURE = "future",
}

export enum SeriesType {
  ANIME = "anime",
  MANGA = "manga",
  NOVEL = "novel",
}

@Entity("series")
export class Series extends BaseEntity {
  @Column({
    name: "cover_image_url",
    type: "varchar",
    length: 500,
    nullable: true,
  })
  coverImageUrl?: string;

  @Index("idx_series_title")
  @Column({ type: "varchar", length: 500, unique: true })
  title!: string;

  @Column({ name: "original_title", type: "varchar", length: 500 })
  originalTitle!: string;

  @Index("idx_series_romanized_title")
  @Column({ name: "romanized_title", type: "varchar", length: 500 })
  romanizedTitle!: string;

  @Index("idx_series_content_type")
  @Column({
    name: "content_type",
    type: "enum",
    enum: SeriesType,
    enumName: "series_type_enum",
  })
  contentType!: SeriesType;

  @Column({ type: "text" })
  synopsis!: string;

  @Index("idx_series_publication_status")
  @Column({
    name: "publication_status",
    type: "enum",
    enum: SeriesStatus,
    enumName: "series_status_enum",
  })
  publicationStatus!: SeriesStatus;

  @Column({ name: "release_date", type: "date" })
  releaseDate!: Date;

  @Column({ name: "end_date", type: "date", nullable: true })
  endDate?: Date;

  @Column({ name: "creator_name", type: "varchar", length: 255 })
  creatorName!: string;

  // RELATIONS

  @OneToOne(() => AnimeDetail, (animeDetail) => animeDetail.series, {
    orphanedRowAction: "delete",
  })
  animeDetails?: AnimeDetail;

  @OneToOne(() => ComicDetail, (comicDetail) => comicDetail.series, {
    orphanedRowAction: "delete",
  })
  comicDetails?: ComicDetail;

  @OneToOne(() => NovelDetail, (novelDetail) => novelDetail.series, {
    orphanedRowAction: "delete",
  })
  novelDetails?: NovelDetail;

  @OneToMany(() => Organization, (organization) => organization.series)
  organizations!: Organization[];
}
