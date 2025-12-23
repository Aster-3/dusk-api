import { DataSource } from "typeorm";
import { User } from "./entities/user.js";
import { Country } from "./entities/country.js";
import { Like } from "./entities/like.js";
import { getEnv } from "./helpers/get-env.js";
import { Series } from "./entities/series.js";
import { AnimeDetail } from "./entities/anime-details.js";
import { ComicDetail } from "./entities/comic-details.js";
import { NovelDetail } from "./entities/novel-details.js";
import { Organization } from "./entities/organization.js";
import { SeriesOrganizations } from "./entities/series_organizations.js";
import { Volume } from "./entities/volume.js";
import { Chapter } from "./entities/chapter.js";
import { Episode } from "./entities/episode.js";
import { Genre } from "./entities/genres.js";
import { SeriesGenres } from "./entities/series_genres.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: getEnv("DB_HOST"),
  port: 5432,
  username: getEnv("DB_USER"),
  password: getEnv("DB_PASSWORD"),
  database: getEnv("DB_NAME"),
  synchronize: true,
  logging: false,
  entities: [
    User,
    Country,
    Like,
    Series,
    AnimeDetail,
    ComicDetail,
    NovelDetail,
    Organization,
    SeriesOrganizations,
    Volume,
    Chapter,
    Episode,
    Genre,
    SeriesGenres,
  ],
});
