import express, { Router } from "express";
import bp from "body-parser";
import cookieSession from "cookie-session";
import { config } from "dotenv";
import router from "./routes.js";

config();

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bp.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "mySession",
    secret: process.env.COOKIE_SECRET,
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use("/", router);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
