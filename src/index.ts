import express from "express";
import "reflect-metadata";
import { GlobalErrorHandler } from "./middlewares/global-error-handler.js";

// ROUTES
import v0Routes from "./routes/v0/index.js";
import v1Routes from "./routes/v1/index.js";

// DB CONNECTION
import { AppDataSource } from "./data-source.js";

const app = express();
app.use(express.json());
app.use(GlobalErrorHandler);

await AppDataSource.initialize();

app.use("/v1", v1Routes);
app.use("/", v0Routes);

app.listen(3000, () => {
  console.log("Dusk Api Running at Port 3000");
});
