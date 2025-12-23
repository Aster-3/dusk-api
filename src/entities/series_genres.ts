import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Series } from "./series.js";
import { Genre } from "./genres.js";

@Entity("series_genres")
export class SeriesGenres {
  @PrimaryColumn("uuid", { name: "series_id" })
  seriesId!: string;

  @PrimaryColumn("int", { name: "genre_id" })
  genreId!: number;

  @ManyToOne(() => Series, (series) => series.genres, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "series_id" })
  series!: Series;

  @ManyToOne(() => Genre, (genre) => genre.seriesGenres, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "genre_id" })
  genre!: Genre;
}
