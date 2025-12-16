const epxress = require("express");
const app = epxress();

app.get("/", (req, res) => {
  res.status(200).json({
    mesage: "Dusk Api is Running...",
    version: "1.0.0",
    endpoints: [
      "/series",
      "/series/animes",
      "/series/mangas",
      "/series/novels",
    ],
  });
});

app.listen(3000, () => {
  console.log("Dusk Api Running at Port 3000");
});
