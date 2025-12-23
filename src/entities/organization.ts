import { Column, Entity, Index, OneToMany, PrimaryColumn } from "typeorm";
import { SeriesOrganizations } from "./series_organizations.js";

export enum OrganizationType {
  STUDIO = "studio",
  PRODUCER = "producer",
  PUBLISHER = "publisher",
}

@Entity("organizations")
export class Organization {
  @PrimaryColumn("uuid")
  id!: string;

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

  @OneToMany(() => SeriesOrganizations, (so) => so.organization)
  seriesOrganizations!: SeriesOrganizations[];
}
