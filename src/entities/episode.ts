import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Series } from "./series.js";

@Entity("episodes")
@Index("idx_episode_series_id", ["series"])
export class Episode {
  @PrimaryColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255 })
  title!: string;

  @Column({ type: "int" })
  number!: number;

  @ManyToOne(() => Series, (series) => series.episodes)
  @JoinColumn({ name: "series_id", referencedColumnName: "id" })
  series!: Series;
}
