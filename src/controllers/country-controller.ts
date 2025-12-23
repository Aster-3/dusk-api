import { CountryService } from "../services/country-service.js";
import type { Request, Response } from "express";

const countryService = new CountryService();

export class CountryController {
  getAll = async (req: Request, res: Response) => {
    const countries = await countryService.findAllCountries();
    res.status(200).send(countries);
  };

  create = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if (!name) return res.status(500).send("Name Field is Required!");
      const newCountry = await countryService.createCountry(name);
      res.status(200).send(newCountry);
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  };
}
