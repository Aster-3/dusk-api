import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Series } from "./Series.js";

export enum OrganizationType {
  STUDIO = "studio",
  PRODUCER = "producer",
  PUBLISHER = "publisher",
}

@Entity("organizations")
export class Organization {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Index("idx_organization_name", { unique: true })
  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Index("idx_organization_slug", { unique: true })
  @Column({ type: "varchar", length: 255 })
  slug!: string;

  @Index("idx_organization_type")
  @Column({
    name: "type",
    type: "enum",
    enum: OrganizationType,
    enumName: "organization_type_enum",
  })
  type!: OrganizationType;

  @Column({ name: "website_url", type: "varchar", length: 255, nullable: true })
  websiteUrl?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  description?: string;

  @Column({
    name: "cover_image_url",
    type: "varchar",
    length: 500,
    nullable: true,
  })
  coverImageUrl?: string;

  @OneToMany(() => Series, (series) => series.organizations)
  series!: Series;
}
