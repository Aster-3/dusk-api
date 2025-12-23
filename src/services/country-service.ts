import { CountryRepository } from "../repositories/country-repository.js";

export class CountryService {
  private countryRepo = new CountryRepository();

  createCountry = async (name: string) => {
    return await this.countryRepo.create({ name });
  };

  findAllCountries = async () => {
    return await this.countryRepo.findAll();
  };
}
