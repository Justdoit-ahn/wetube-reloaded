import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const port = 4000;
app.use(morgan("dev"));

app.use("/video", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

const portClick = () =>
  console.log(`Server listenting on port http://localhost:${port}`);

app.listen(port, portClick);
