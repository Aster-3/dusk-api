import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SeriesGenres } from "./series_genres.js";

@Entity("genres")
export class Genre {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Index("idx_genres_name", { unique: true })
  @Column({ type: "varchar", length: 255 })
  name!: string;

  @OneToMany(() => SeriesGenres, (sg) => sg.genre)
  seriesGenres?: SeriesGenres[];
}
