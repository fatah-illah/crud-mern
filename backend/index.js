import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/userRoute.js";

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env["MONGO_URI"], { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected..."));

app.use(cors());
app.use(express.json());
app.use(userRoute);

const port = process.env.PORT || 5000;
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
