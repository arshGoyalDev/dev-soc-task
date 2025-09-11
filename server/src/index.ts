import express from "express";
import cors from "cors";

import "dotenv/config";

import { routes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: process.env.ORIGIN,
  methods: ["GET"],
}))

app.use(express.json())

app.get("/", (_req, res) => {
  res.status(200).send("OK");
})

app.use('/api', routes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
