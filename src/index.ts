import express from "express";
const app = express();
import type { Response, Request } from "express";

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    mesage: "Dusk Api is Running...",
    version: "1.0.0",
    endpoints: ["/series", "/series/animes", "/series/novels"],
  });
});

app.listen(3000, () => {
  console.log("Dusk Api Running at Port 3000");
});
