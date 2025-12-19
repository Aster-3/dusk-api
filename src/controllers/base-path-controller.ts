import type { Request, Response } from "express";
export const basePathController = (req: Request, res: Response) => {
  res.status(200).json({
    mesage: "Dusk Api is Running...",
    version: "1.0.0",
    endpoints: [
      "/series",
      "/series/animes",
      "/serieses/mangas",
      "/series/novels",
    ],
  });
};
