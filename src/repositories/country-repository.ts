import { AppDataSource } from "../data-source.js";
import { Country } from "../entities/country.js";
import { BaseRepository } from "./_base-repository.js";

export class CountryRepository extends BaseRepository<Country> {
  constructor() {
    super(AppDataSource.getRepository(Country));
  }
}
