import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user.js";
import { Series } from "./series.js";
import { BaseEntity } from "./_base-entity.js";

@Index("idx_likes_user_id", ["user"])
@Index("idx_likes_series_id", ["series"])
@Index("ux_likes_user_series", ["user", "series"], { unique: true })
@Entity("likes")
export class Like extends BaseEntity {
  @Column({ type: "boolean" })
  isLiked!: boolean;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user!: User;

  @ManyToOne(() => Series, (series) => series)
  @JoinColumn({ name: "series_id", referencedColumnName: "id" })
  series!: Series;
}
