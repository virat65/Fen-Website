import express from "express";
import dotenv from "dotenv";
import fileupload from "express-fileupload";
import database from "./dataBase.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
dotenv.config();
database();
const port = process.env.port;
console.log(port, "port");

app.use(express.json());
app.use(cors());
app.use(fileupload());
const currentpath = fileURLToPath(import.meta.url);
console.log(currentpath, "currenpath");
const currentdirectory = path.dirname(currentpath)
console.log(currentdirectory, "currentdirectory");
app.use("/images", express.static(path.join(currentdirectory,"public/images")));


// app.use("images", express.static(path.join(currentdirectory,"public/images"))); “When someone opens a URL that starts with /images,
// serve files from the public/images folder.”
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
