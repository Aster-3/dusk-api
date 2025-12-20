import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Series } from "./series.js";
import { Organization } from "./organization.js";

@Entity("series_organization")
export class SeriesOrganizations {
  @PrimaryColumn("uuid")
  series_id!: string;

  @PrimaryColumn("int")
  organization_id!: number;

  @ManyToOne(() => Series, (series) => series.organizations, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "series_id", referencedColumnName: "id" })
  series!: Series;

  @ManyToOne(() => Organization, (organization) => organization.series, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "organization_id", referencedColumnName: "id" })
  organization!: Organization;
}
