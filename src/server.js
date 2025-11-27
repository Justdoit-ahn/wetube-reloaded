import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const port = 4000;
app.use(morgan("dev"));

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

const portClick = () =>
  console.log(`Server listenting on port http://localhost:${port}`);

app.listen(port, portClick);
